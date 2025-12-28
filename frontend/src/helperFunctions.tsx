export const convertDatetime = (datetime: string) => {
  const today = new Date();
  const date = new Date(datetime);

  const timeDiff = today.getTime() - date.getTime();

  const diffMinutes = timeDiff / (1000 * 60);
  const diffHours = timeDiff / (1000 * 60 * 60);
  const diffDays = timeDiff / (1000 * 60 * 60 * 24);

  if (diffDays >= 3) {
    const formatted = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
    return formatted;
  } else if (diffDays >= 1) {
    return `${Math.floor(diffDays)} Days Ago`;
  } else if (diffHours >= 1) {
    return `${Math.floor(diffHours)} Hours Ago`;
  } else if (diffMinutes >= 1) {
    return `${Math.floor(diffMinutes)} Minutes Ago`;
  } else {
    return `Just Now`;
  }
};

// 😁😀😃😄😊🥲🫤🙁😔😞

export const convertFeelingToEmoji = (feeling: number) => {
  const emojiArr = [
    "😞",
    "😔",
    "🙁",
    "🫤",
    "🥲",
    "😊",
    "😄",
    "😃",
    "😀",
    "😁",
    "🤩",
  ];
  const feelingIndex = Math.floor(feeling);
  return emojiArr[feelingIndex];
};
