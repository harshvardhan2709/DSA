import re

spam_keywords = [
    "free", "winner", "cash", "prize", "money", "congratulations", "urgent", "claim",
    "discount", "buy", "cheap", "limited offer", "guaranteed", "offer", "deal",
    "risk-free", "click here", "exclusive", "now"
]

def clean_text(text):
    return re.sub(r'[^a-zA-Z\s]', '', text.lower())

def is_spam(email_text):
    cleaned_text = clean_text(email_text)
    for word in spam_keywords:
        if word in cleaned_text:
            return True
    return False

email = input("Please enter the email text to check for spam:\n")

if is_spam(email):
    print("This email is classified as Spam.")
else:
    print("This email is classified as Ham (Not Spam).")

