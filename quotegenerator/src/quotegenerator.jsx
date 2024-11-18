import { Button, Paper, Title, Text } from '@mantine/core';
import React, { useState, useEffect } from "react";

function Quotegenerator() {
  const url = "https://api.quotable.io/random";
  const [quotes, setQuotes] = useState({});

  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching quote:", error));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const { content, author } = quotes;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
        <Title>Welcome to the random quote generator</Title>
      <Paper shadow="xl" radius="md" p="md" withBorder mt="xl">
       
        <Text>{content}</Text>
        <Text> {author}</Text>
        <Button
          variant="gradient"
          gradient={{ from: 'cyan', to: 'grape', deg: 90 }}
          onClick={getNewQuote}
        >
          Generate Quote
        </Button>
      </Paper>
    </div>
  );
}

export default Quotegenerator;
