def multiplesOf3and5(number):
  num = 0
  for i in range(number):
    if 0 in {i%3,i%5}:
      num += i
  return num

print(multiplesOf3and5(1000))  # 233168