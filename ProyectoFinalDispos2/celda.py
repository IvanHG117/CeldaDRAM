def celda(row, column, data, refresh):
	'''el row y el column nos ayudara para saber donde estan nuestros datos, y el data como dato,refresh para saber si se refresca
	el orden de los argumentos es row, column, dato y refresh'''
	# row = int(row,2)
	# column = int(column,2)
	datos = {'row': row, 'column': column, 'data':data, 'refresh': refresh }
	return datos

# celda = celda('11' , '00', 1,1)
# print(celda)