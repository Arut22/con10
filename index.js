<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <nav class="nav">
        <div class="container">
            <div class="logo">
                <h2 style="color: white; margin: 0;">🎅 Письмо Деду Морозу</h2>
            </div>
            <div class="nav-links">
                <% navLinks.forEach(link => { %>
                    <a href="<%= link.href %>" class="btn btn-secondary"><%= link.text %></a>
                <% }); %>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="hero">
            <h1>🎄 Добро пожаловать в мастерскую писем Деду Морозу! 🎅</h1>
            <p>Напишите своё письмо, и оно обязательно дойдёт до волшебной Лапландии. 
               Уже отправлено писем: <strong><%= lettersCount %></strong></p>
            <a href="/letter" class="btn btn-large">📝 Написать письмо</a>
        </div>

        <div class="form-container">
            <h2>Как это работает?</h2>
            <ol style="margin-left: 20px; margin-top: 15px;">
                <li>Заполните форму письма</li>
                <li>Нажмите "Отправить письмо"</li>
                <li>Получите красиво оформленное письмо</li>
                <li>Дед Мороз получит ваше письмо!</li>
            </ol>
            
            <div style="margin-top: 30px; text-align: center;">
                <h3>✨ Важно помнить:</h3>
                <p style="color: #666; margin-top: 10px;">
                    Будьте вежливы и благодарны. Дед Мороз особенно любит хороших ребят!
                </p>
            </div>
        </div>
    </div>

    <footer class="footer">
        <p>© 2023 Мастерская писем Деду Морозу. Все права защищены.</p>
    </footer>
</body>
</html>