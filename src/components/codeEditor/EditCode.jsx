import React, { useRef, useState, useEffect } from "react";
import CodeLanguageSelector from "./CodeLanguageSelector";
import { CODE_SNIPPETS } from "../../helpers/const";
import OutputCode from "./OutputCode";
import { Editor } from "@monaco-editor/react";
import { Box, HStack, useToast } from "@chakra-ui/react";

const EditCode = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const toast = useToast();

  useEffect(() => {
    const handleResize = (e) => {
      console.log(e);
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      if (screenWidth < 1023 || screenHeight < 392) {
        toast({
          title: "Предупреждение",
          description:
            "Пожалуйста, используйте ноутбук для просмотра этой страницы.",
          status: "warning",
          duration: null, // Оставить уведомление до закрытия пользователем
          isClosable: true,
        });
      } else {
        toast.closeAll(); // Закрыть все уведомления, если разрешение восстановлено
      }
    };

    window.addEventListener("resize", handleResize);
    // window.addEventListener("resize", (e) => console.log(e));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toast]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };
  // ! функция которая меняет на темную тему
  const [isTheme, setIsTheme] = useState(false);
  const updateThemeState = () => {
    setIsTheme(document.body.classList.contains("dark-theme"));
  };
  useEffect(() => {
    updateThemeState();
    const observer = new MutationObserver(() => {
      updateThemeState();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Box>
      <HStack spacing={4}>
        <Box width="50%">
          <CodeLanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            language={language}
            theme={isTheme ? "vs-dark" : "vs-light"}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            options={{
              suggest: {
                showWords: true, // Показывать предложения при наборе слов
                showVariables: true, // Показывать предложения при наборе переменных
              },
            }}
          />
        </Box>
        <OutputCode
          editorRef={editorRef}
          language={language}
          isTheme={isTheme}
        />
      </HStack>
    </Box>
  );
};

export default EditCode;
