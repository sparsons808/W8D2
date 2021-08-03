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
end

p [1, -1, 5, 0, 3, -3].two_sum