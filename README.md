# Local AI Buddy, happy asking! :blush:

**Local AI Buddy** is a flask-based Web Application which answer your questions by invoking your local LLM, in this case is `Ollama`.

![Local AI Buddy](local-ai-buddy.png)

## Why using local Ollama?

- Uninterrupted access: You won't have to worry about rate limits, downtime, and unexpected service disruptions.
- Improved performance: The response generation is fast without lag or latencies. Even on mid-level laptops, you get speeds of around 50 tokens per second.
- Enhanced security: You have full control over the inputs used to fine-tune the model, and the data stays locally on your device.
- Reduced costs: Instead of paying high fees to access the APIs or subscribe to the online chatbot, you can use Llama 3 for free.
- Customization and flexibility: You can customize models using hyperparameters, add stop tokes, and change advanced settings.
- Offline capabilities: Once you have downloaded the model, you don't need an internet connection to use it.
- Ownership: You have complete ownership and control over the model, its data, and its outputs.

Read this [article](https://www.datacamp.com/blog/the-pros-and-cons-of-using-llm-in-the-cloud-versus-running-llm-locally) to learn more about whether using LLMs locally is for you.

If you are willing to, you can change to use online LLMs by updating the model in `handler.py`.


## How to set up our web application?

### Self-service

1. Launch `llama3.1` locally
   1. First, download and install Ollama following [ollama instruction](https://ollama.com/download). You can use `curl -fsSL https://ollama.com/install.sh | sh` to download it on Linux.
   2. Pull the model image by running `ollama run llama3.1` in your shell or powershell.
   3. Serve llama by `ollama serve`.

2. Start up Flask web application: 
   1. Run the command `uv sync` to install all dependencies.
   2. Run the application by `uv run main.py`.

Then go to `http://127.0.0.1:5000/` or `http://localhost:5000/` to start your trip!

### Using docker

We provide an alternative to leverage docker for running the application in a convenient way.

Steps:
1. Pull docker image using `docker pull jhhyj1010/llama3-ai-buddy:full`.
2. Run the docker container by `docker run -p 5000:5000 jhhyj1010/llama3-ai-buddy:full`, this will take about 30 minutes due to loading llama3.1 to localhost.
3. Go to `http://127.0.0.1:5000/` and ask any questions you want.


For any questions, please contact me via `jhhyj1010@gmail.com`.