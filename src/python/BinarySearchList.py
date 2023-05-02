import math


def bs_list(haystack: list[int], needle: int) -> bool:
    low = 0
    high = len(haystack)

    while low < high:
        mid = math.floor(low + (high - low) / 2)
        if haystack[mid] == needle:
            return True
        elif haystack[mid] > needle:
            high = mid
        else:
            low = mid + 1

    return False


def test():
    print("TEST START")
    foo: list[int] = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]
    assert bs_list(foo, 69) == True
    assert bs_list(foo, 1336) == False
    assert bs_list(foo, 69420) == True
    assert bs_list(foo, 69421) == False
    assert bs_list(foo, 1) == True
    assert bs_list(foo, 0) == False
    print("TEST SUCCESS")


test()
