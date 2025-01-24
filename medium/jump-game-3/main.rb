require "debug"
require "set"

def jump_game_3(arr, start_index)

    stack = [start_index]
    visited = Set.new

    while stack.length > 0

        i = stack.pop
        pp "Index: #{i}. Current Stack: #{stack.to_a()}"
        jump = arr[i]
        pp "Jump length #{jump}"

        if jump === 0 
            return true
        end

        if !visited.include?(i)
            visited.add(i)
            if i + jump < arr.length
                stack.push(i + jump)
                pp "Pushing #{i + jump} to stack: #{stack}"
            end

            if i - jump >= 0 
                stack.push(i - jump)
                pp "Pushing #{i - jump} to stack: #{stack}"
            end
        end

        pp "#{visited.to_a()}"
    end

    return false
end

pp jump_game_3([4, 2, 3, 0, 3, 1, 2], 7)