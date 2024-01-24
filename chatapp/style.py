# Style.py

# Estilo para preguntas y respuestas
shadow = "rgba(0,0,0, 0.15)"
chat_margin = "20%"
message_style = dict(
    padding = "1em",
    border_radius = "5px",
    margin_y = "0.5em",
    box_shadow = shadow,
    max_width = "30em",
    display = "inline_block"
)

# Establecemos estilos especificos para las preguntas y respuestas

question_style = message_style | dict (
    bg = "#8DDFCB", margin_left = chat_margin 
)

answer_style = message_style | dict(
    bg = "#EDB7ED", margin_right = chat_margin
)

# Styles for the action bar

input_style = dict(
    border_width = "1px", padding = "1em", box_shadow = shadow
)

button_style = dict(bg = "#82A0D8", box_shadow = shadow)