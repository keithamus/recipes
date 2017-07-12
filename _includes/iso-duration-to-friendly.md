{% assign accumulator = '' %}
{% assign inTime = false %}
{% assign years = 0 %}
{% assign months = 0 %}
{% assign weeks = 0 %}
{% assign days = 0 %}
{% assign hours = 0 %}
{% assign minutes = 0 %}
{% assign seconds = 0 %}

{% assign letters = include.duration | split: '' %}
{% for letter in letters %}
  {% if letter == 'P' %}
  {% elsif letter == '1' or letter == '2' or letter == '3' or letter == '4' or letter == '5' or letter == '6' or letter == '7' or letter == '8' or letter == '9' or letter == '0' or letter == '.' %}
    {% assign accumulator = accumulator | append: letter %}
  {% elsif letter == 'Y' %}
    {% assign years = accumulator | times: 1 %}
    {% assign accumulator = '' %}
  {% elsif letter == 'M' and inTime == false %}
    {% assign months = accumulator | times: 1 %}
    {% assign accumulator = '' %}
  {% elsif letter == 'W' %}
    {% assign weeks = accumulator | times: 1 %}
    {% assign accumulator = '' %}
  {% elsif letter == 'D' %}
    {% assign days = accumulator | times: 1 %}
    {% assign accumulator = '' %}
  {% elsif letter == 'T' %}
    {% assign inTime = true %}
    {% assign accumulator = '' %}
  {% elsif letter == 'H' %}
    {% assign hours = accumulator | times: 1 %}
    {% assign accumulator = '' %}
  {% elsif letter == 'M' and inTime == true %}
    {% assign minutes = accumulator | times: 1 %}
    {% assign accumulator = '' %}
  {% elsif letter == 'S' %}
    {% assign seconds = accumulator | times: 1 %}
    {% assign accumulator = '' %}
  {% endif %}
{% endfor %}

{% assign minutes = seconds | divided_by: 60 | floor | plus: minutes %}
{% assign seconds = seconds | modulo: 60 %}

{% assign hours = minutes | divided_by: 60 | floor | plus: hours %}
{% assign minutes = minutes | modulo: 60 %}

{% assign days = hours | divided_by: 24 | floor | plus: days %}
{% assign hours = hours | modulo: 24 %}

{% assign weeks = days | divided_by: 7 | floor | plus: weeks %}
{% assign days = days | modulo: 7 %}

{% assign months = weeks | divided_by: 4 | floor | plus: months %}
{% assign weeks = weeks | modulo: 4 %}

{% assign years = months | divided_by: 12 | floor | plus: years %}
{% assign months = months | modulo: 12 %}

{% assign durationInSeconds = years | times: 31540000 %}
{% assign durationInSeconds = months | times: 2628000 | plus: durationInSeconds %}
{% assign durationInSeconds = weeks | times: 604800 | plus: durationInSeconds %}
{% assign durationInSeconds = days | times: 86400 | plus: durationInSeconds %}
{% assign durationInSeconds = hours | times: 3600 | plus: durationInSeconds %}
{% assign durationInSeconds = minutes | times: 60 | plus: durationInSeconds %}
{% assign durationInSeconds = seconds | plus: durationInSeconds %}

<time {% if include.class %}class="{{ include.class }}"{% endif %} duration="{{include.duration}}" data-duration-in-seconds="{{durationInSeconds}}">
{% assign output = false %}
{% if years > 0 %}
  {{ years }} year{% if years > 1 %}s{% endif %}
  {% assign output = true %}
{% endif %}
{% if months > 0 %}
  {% if output %}, {% endif %}{{ months }} month{% if months > 1 %}s{% endif %}
  {% assign output = true %}
{% endif %}
{% if weeks > 0 %}
  {% if output %}, {% endif %}{{ weeks }} week{% if weeks > 1 %}s{% endif %}
  {% assign output = true %}
{% endif %}
{% if days > 0 %}
  {% if output %}, {% endif %}{{ days }} day{% if days > 1 %}s{% endif %}
  {% assign output = true %}
{% endif %}
{% if hours > 0 %}
  {% if output %}, {% endif %}{{ hours }} hour{% if hours > 1 %}s{% endif %}
  {% assign output = true %}
{% endif %}
{% if minutes > 0 %}
  {% if output %}, {% endif %}{{ minutes }} minute{% if minutes > 1 %}s{% endif %}
  {% assign output = true %}
{% endif %}
{% if seconds > 0 %}
  {% if output %}, {% endif %}{{ seconds }} second{% if second > 1 %}s{% endif %}
  {% assign output = true %}
{% endif %}
</time>
