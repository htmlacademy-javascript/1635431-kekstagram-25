function commentField (stringLength , numberLine) {
  const GET = numberLine + stringLength;
  if (stringLength >60) {
    return true;
  }
  if (GET >150) {
    return false;
  }
  if (GET <60) {
    return false;
  }
}

commentField();
