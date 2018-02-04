function countOccurrences(target, str) {
    let counter = 0;
    while (true){
        let startIndex = str.indexOf(target)
        if(startIndex < 0) {
            break;
        }
        counter++;
        str = str.substr(startIndex+1);
    }
    console.log(counter);
}

countOccurrences('ma','\'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');
