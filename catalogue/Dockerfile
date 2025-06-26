FROM python:3.12.11-alpine3.22
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5900
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5900"]