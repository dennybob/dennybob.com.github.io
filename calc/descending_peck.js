// descending_peck.js

// Function for input validation
function isValidInput(r, z, i, j, k) {
    return (
        !isNaN(r) &&
        !isNaN(r) &&
        i >= 0.0001 &&
        j >= 0.0001 &&
        k >= 0.0001
    );
}

function peck() {
    var r = fix(Number(document.getElementById("dp_r").value), 4);
    var z = fix(Number(document.getElementById("dp_z").value), 4);
    var i = fix(Number(document.getElementById("dp_i").value), 4);
    var j = fix(Number(document.getElementById("dp_j").value), 4);
    var k = fix(Number(document.getElementById("dp_k").value), 4);

    // Only display output if inputs are valid
    if (isValidInput(r, z, i, j, k)) {

        // Output Haas descending peck drill cycle
        var code = [];
        code.push(
            "G98 G83 Z" + z + 
            " R" + r + 
            " I" + i + 
            " J" + j + 
            " K" + k + 
            " F__ ;"
        );
        code.push("G80 ;");
        document.getElementById("code").value = code.join('\n');

        // Calculate & output actual pecks
        var pecks = [];
        var current_depth = r;
        var peck_depth = i;
        var peck_count = 0;
        while (current_depth > z) {
            peck_count++;
            var next_depth = current_depth - peck_depth;
            if (next_depth < z) {
                next_depth = z;
            }
            // compute actual depth-of-cut (DOC) for this peck (handles last/clamped peck correctly)
            var actual_doc = current_depth - next_depth;

            // build aligned four-line output:
            var prefix = "Peck " + peck_count + ":";
            var pad = " ".repeat(2);
            var line1 = prefix;
            var line2 = pad + "from Z" + fix(current_depth,4);
            var line3 = pad + "to Z" + fix(next_depth,4);
            var line4 = pad + "DOC " + fix(actual_doc,4);
            pecks.push(line1 + "\n" + line2 + "\n" + line3 + "\n" + line4);

            current_depth = next_depth;
            peck_depth = Math.max(peck_depth - j, k);
            
        }
        document.getElementById("pecks").value = pecks.join('\n');
        
        // resize textareas to fit content
        document.getElementById("code").style.height = (document.getElementById("code").scrollHeight) + "px";
        document.getElementById("pecks").style.height = (document.getElementById("pecks").scrollHeight) + "px";
    }
}
