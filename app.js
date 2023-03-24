function vigenereEncode(text, key) {
  var encodedText = '';
  var keyIndex = 0;
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var keyChar = key.charAt(keyIndex % key.length);
    var charIndex = alphabet.indexOf(char.toLowerCase());
    var keyCharIndex = alphabet.indexOf(keyChar.toLowerCase());
    if (charIndex != -1) {
      var encodedCharIndex = (charIndex + keyCharIndex) % 26;
      var encodedChar = alphabet.charAt(encodedCharIndex);
      if (char == char.toUpperCase()) {
        encodedChar = encodedChar.toUpperCase();
      }
      encodedText += encodedChar;
      keyIndex++;
    } else {
      encodedText += char;
    }
  }

  return encodedText;
}


function vigenereDecode(text, key) {
  var decodedText = '';
  var keyIndex = 0;
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var keyChar = key.charAt(keyIndex % key.length);
    var charIndex = alphabet.indexOf(char.toLowerCase());
    var keyCharIndex = alphabet.indexOf(keyChar.toLowerCase());
    if (charIndex != -1) {
      var decodedCharIndex = (charIndex - keyCharIndex + 26) % 26;
      var decodedChar = alphabet.charAt(decodedCharIndex);
      if (char == char.toUpperCase()) {
        decodedChar = decodedChar.toUpperCase();
      }
      decodedText += decodedChar;
      keyIndex++;
    } else {
      decodedText += char;
    }
  }

  return decodedText;
}


document.getElementById('encode-button').addEventListener('click', function() {
  var text = document.getElementById('input-text').value;
  var key = document.getElementById('key').value;
  var encodedText = vigenereEncode(text, key);
  document.getElementById('output-text').value = encodedText;
});

document.getElementById('decode-button').addEventListener('click', function() {
  var text = document.getElementById('input-text').value;
  var key = document.getElementById('key').value;
  var decodedText = vigenereDecode(text, key);
  document.getElementById('output-text').value = decodedText;
});
