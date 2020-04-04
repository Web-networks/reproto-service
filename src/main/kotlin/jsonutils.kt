package raid.neuroide.reproto.service

fun combineJsonArray(elements: Iterable<String>): String {
    return elements.joinToString(", ", prefix = "[", postfix = "]")
}
