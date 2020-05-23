def bufferTriestadoHabiCero(enable, A):
    '''habilitador en bajo, solo se activa con cero'''
    if enable == False:
        return A
    else:
        return 'Z'

# variable = bufferTriestadoHabiCero(1,0)
# print(variable)