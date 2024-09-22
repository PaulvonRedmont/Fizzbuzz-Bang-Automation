def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def is_palindrome(num):
    return str(num) == str(num)[::-1]

def is_perfect_square(num):
    return int(num**0.5) ** 2 == num

def sum_of_digits(num):
    return sum(int(digit) for digit in str(num))

def check_number(n):
    results = []

    if n % 4 == 0 or '4' in str(n):
        results.append("bang")
    if n % 7 == 0 or '7' in str(n):
        results.append("cat")
    if is_prime(n):
        results.append("bill")
    if n % 3 == 0 or '3' in str(n):
        results.append("zap")
    if str(n).endswith('5'):
        results.append("pow")
    if is_palindrome(n):
        results.append("wow")
    if is_perfect_square(n):
        results.append("boom")
    if sum_of_digits(n) == 10:
        results.append("snap")
    if n % 2 == 0:
        results.append("tick")
    
    return results

# Example usage
number = 44 #insert number here
result = check_number(number)
print(f"{number}: {' '.join(result)}")
