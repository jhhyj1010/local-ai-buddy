from langchain_ollama import ChatOllama


def answer_question(question: str) -> str:
    # Create a ChatOllama Model
    llm = ChatOllama(model='llama3.1')

    # Invoke the model with a message
    result = llm.invoke(question)

    return result.content