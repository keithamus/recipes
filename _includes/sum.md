{% assign total = include.start | default: 0 %}
{% if include.values.first %}
{% assign values = include.values %}
{% else %}
{% assign values = include.values | split: ' ' %}
{% endif %}
{% for value in values %}
  {% assign total = value | plus: total %}
{% endfor %}
{% assign roundamt = include.round | default: 10 %}
{{ total | round: roundamt }}
