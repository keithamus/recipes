{% capture output %}

  {% assign inTime = false %}
  {% assign years = 0 %}
  {% assign months = 0 %}
  {% assign weeks = 0 %}
  {% assign days = 0 %}
  {% assign hours = 0 %}
  {% assign minutes = 0 %}
  {% assign seconds = 0 %}

  {% for duration in include.durations %}

    {% assign accumulator = '' %}
    {% assign letters = duration | split: '' %}
    {% for letter in letters %}
      {% if letter == 'P' %}
      {% elsif letter == '1' or letter == '2' or letter == '3' or letter == '4' or letter == '5' or letter == '6' or letter == '7' or letter == '8' or letter == '9' or letter == '0' or letter == '.' %}
        {% assign accumulator = accumulator | append: letter %}
      {% elsif letter == 'Y' %}
        {% assign years = accumulator | times: 1 | plus: years %}
        {% assign accumulator = '' %}
      {% elsif letter == 'M' and inTime == false %}
        {% assign months = accumulator | times: 1 | plus: months %}
        {% assign accumulator = '' %}
      {% elsif letter == 'W' %}
        {% assign weeks = accumulator | times: 1 | plus: weeks %}
        {% assign accumulator = '' %}
      {% elsif letter == 'D' %}
        {% assign days = accumulator | times: 1 | plus: days %}
        {% assign accumulator = '' %}
      {% elsif letter == 'T' %}
        {% assign inTime = true %}
        {% assign accumulator = '' %}
      {% elsif letter == 'H' %}
        {% assign hours = accumulator | times: 1 | plus: hours %}
        {% assign accumulator = '' %}
      {% elsif letter == 'M' and inTime == true %}
        {% assign minutes = accumulator | times: 1 | plus: minutes %}
        {% assign accumulator = '' %}
      {% elsif letter == 'S' %}
        {% assign seconds = accumulator | times: 1 | plus: seconds %}
        {% assign accumulator = '' %}
      {% endif %}
    {% endfor %}

  {% endfor %}

P
{% if years > 0 %}{{ years }}Y{% endif %}
{% if months > 0 %}{{ months }}M{% endif %}
{% if weeks > 0 %}{{ weeks }}W{% endif %}
{% if days > 0 %}{{ days }}D{% endif %}
{% if hours > 0 or minutes > 0 or seconds > 0 %}T{% endif %}
{% if hours > 0 %}{{ hours }}H{% endif %}
{% if minutes > 0 %}{{ minutes }}M{% endif %}
{% if seconds > 0 %}{{ seconds }}S{% endif %}

{% endcapture %}{{ output | strip_newlines | replace: ' ', '' | trim }}
