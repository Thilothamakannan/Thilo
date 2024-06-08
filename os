#!/bin/bash

while true; do

    echo "Choose an option:"
    echo "1. Perform cat command"
    echo "2. Perform cp command"
    echo "3. Perform mv command"
    echo "4. Perform wc command"
    echo "5. Perform grep command"
    echo "6. Perform head command"
    echo "7. Perform tail command"
    echo "8. Perform sort command"
    echo "9. Exit"

    read choice

    case $choice in

    1)
        echo "Enter the filename for cat command:"
        read filename
        cat "$filename"
        ;;

    2)
        echo "Enter the source file for cp command:"
        read srcfile
        echo "Enter the destination file for cp command:"
        read destfile
        cp "$srcfile" "$destfile"
        ;;

    3)
        echo "Enter the source file for mv command:"
        read srcfile
        echo "Enter the destination file for mv command:"
        read destfile
        mv "$srcfile" "$destfile"
        ;;

    4)
        echo "Enter the filename for wc command:"
        read filename
        wc "$filename"
        ;;

    5)
        echo "Enter the filename for grep command:"
        read filename
        echo "Enter the pattern to search for:"
        read pattern
        grep "$pattern" "$filename"
        ;;

    6)
        echo "Enter the filename for head command:"
        read filename
        echo "Enter the number of lines to display:"
        read num_lines
        head -n "$num_lines" "$filename"
        ;;

    7)
        echo "Enter the filename for tail command:"
        read filename
        echo "Enter the number of lines to display:"
        read num_lines
        tail -n "$num_lines" "$filename"
        ;;

    8)
        echo "Enter the filename for sort command:"
        read filename
        sort "$filename"
        ;;

    9)
        exit 0
        ;;

    *)
        echo "Invalid option. Please choose again."
        ;;

    esac

done
