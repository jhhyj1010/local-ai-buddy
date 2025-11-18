from ai_buddy import create_app

app = create_app()

def main():
    print("Hello from local-ai-buddy!")
    app.run(host='0.0.0.0', port=5000)    


if __name__ == "__main__":
    main()
