FROM jhhyj1010/local-ai-buddy
LABEL maintainer="jhhyj1010@gmail.com"
LABEL version="0.1.0"
LABEL description="This is a web application which is used for generating answers based on local Ollama model"
WORKDIR /app
COPY . .
EXPOSE 5000
EXPOSE 11434

CMD ["sh", "run_app.sh"]
