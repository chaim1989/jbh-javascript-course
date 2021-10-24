explain SELECT messages.id as message_id,messages.content,messages.created_at,
send_to_user.fullname as receiver_fullname,
send_from_user.fullname as sender_fullname,
messages.to_user_id as receiver_id,
messages.from_user_id as sender_id
 FROM messages 
left join users as send_to_user on send_to_user.id=messages.to_user_id
left join users as send_from_user on send_from_user.id=messages.from_user_id
where messages.to_user_id=1 or messages.from_user_id=1