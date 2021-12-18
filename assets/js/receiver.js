let url = new URL(window.location.href);
receivedText = url.searchParams.get("text");
PrintOnHTML(receivedText);