from bufferTriestado import bufferTriestado
from bufferTriestadoHabiCero import bufferTriestadoHabiCero
from celda import celda
# variable = bufferTriestado(0,1)
# print(variable)

# variable2 = bufferTriestadoHabiCero(1,0)
# print(variable2)

# variables
refresh = 0
row = '01'
col = '10'
dout = 0
rw = 0
din = 1

#funcionamiento
buffer1 = bufferTriestadoHabiCero(rw,din)
buffer2 = bufferTriestado(rw, buffer1)
dout = buffer2
buffer3 = bufferTriestado(refresh,dout)
celda = celda(row, col, buffer1, refresh)

print('-'*10)
print('refresh ',refresh)
print('row ',row)
print('col ',col)
print('dout ',dout)
print('rw ', rw)
print('din ', din)
print('-'*10)
print('buffer1', buffer1)
print('buffer2', buffer2)
print('buffer3', buffer3)
print('-'*10)
print('salida 1: ', buffer3 )
print('salida 2: ', buffer1)
print('-'*10)
print('celda', celda)
