KEY="123"

# 注意，中文會失敗，例如 "GPT 是甚麼?"
curl "http://localhost:8009/sqlcmd/SELECT%20*%20FROM%20users" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $KEY" \


#  -d '{
#     "model": "gpt-3.5-turbo",
#     "messages": [{"role": "user", "content": "What is GPT?"}],
#     "temperature": 0.7
#   }'