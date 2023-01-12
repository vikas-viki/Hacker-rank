function saveThePrisoner(n, m, s) {
    if ((m + s) <= n) { // if starting and increment is less than n return starting-1 + m;
        return m + (s - 1);
    } else {
        if ([((s - 1) + m) % n] > 0) { 
            return [((s - 1) + m) % n];
        } else {
            return ((s - 1) + m) % n + n;
        }
    }

}
saveThePrisoner(5, 2, 2);

// s-> starting position, m -> incrementation, n -> numbers in a sequence form 0.