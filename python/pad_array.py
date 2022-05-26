#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    """
    Given an array, a min_size, and a value, if the length
    of the array is less than min_size, append value intil min
    size is reached.
    """
    if len(array) >= min_size: #don't need to add anything
        return array
    
    new_array = array.copy()
    size_diff = min_size - len(array)
    for i in range(size_diff):
        new_array.append(value)
    
    return new_array
