#!/bin/bash

ollama serve &
sleep 10
ollama run llama3.1
python3.12 main.py