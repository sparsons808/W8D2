class Array
    def two_sum
        new_arr = []
        self.each_with_index do |ele1, idx1|
            self.each_with_index do |ele2, idx2|
                if ele1 + ele2 == 0 && idx1 < idx2 
                    new_arr.push([ele1, ele2])
                end
            end
        end
        new_arr
    end

    def transpose
        row = self.length
        col = self[0].length
        transposed = Array.new(col) { Array.new(row) }
        (0...row).each do |r|
            (0...col).each do |c|
                transposed[r][c] = self[c][r]
            end
        end
        transposed
    end

    def my_inject(accumulator = 0, prc)
        i = 0
        if accumulator == 0
            accumulator = self.first
            i += 1
        end

        while i < self.length
            accumulator = prc.call(accumulator, self[i])
            i += 1
        end

        accumulator
    end
end

# p [1, -1, 5, 0, 3, -3].two_sum
# p [[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose

prc = Proc.new { |a, b| a + b }

p [1, 2, 3].my_inject(prc)
