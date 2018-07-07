from rehive import Rehive
import pprint

printer = pprint.PrettyPrinter(indent=1)

rehive = Rehive('9f93f74d1934c9df0a9bc5183987f25147617058b6df8384a60105c5f5383891')

register = input("\nDo you want to register new users? Type 'yes' and enter: ")

if register == 'yes':
	for num in range(0,2):
		user = rehive.admin.users.create()
		printer.pprint(user)
 
credit = input("\nLet's credit some users. Please type amount: ")

users = rehive.admin.users.get()		

for user in users:
	group = user['groups'][0]['name']
	if group == 'user':
		tx = rehive.admin.transactions.create_credit(amount=credit,
													currency='USD',
													user=user['identifier'],
													confirm_on_create=False)
		print(tx)