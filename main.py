from ai_buddy import create_app

app = create_app()

def main():
    print("Hello from local-ai-buddy!")
    app.run(debug=True)    


if __name__ == "__main__":
    main()
