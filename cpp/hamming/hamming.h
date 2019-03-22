#ifndef HAMMING_HAMMING_H
#define HAMMING_HAMMING_H
#include <string>

namespace hamming {

    using HammingDistance = size_t;

    HammingDistance compute (const std::string& a, const std::string& b) {

        int count = 0;

        if (a.size() != b.size())
            throw std::domain_error("Domain error");

        for (unsigned int i = 0; i < a.size(); ++i ) {
            if (a[i] != b[i])
                ++count;
        }
        return count;
    }

}




#endif //HAMMING_HAMMING_H

