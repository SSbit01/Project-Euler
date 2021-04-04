import os
my_list = os.listdir("Code")

stars = 25*"*"
for i,f in enumerate(my_list):
  print(stars)
  print(f"Answer to Problem {i+1}:")
  os.system(f"python ./Code/{f}")