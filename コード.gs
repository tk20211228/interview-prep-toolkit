/**
 * 文字数から面接回答の推定時間をフォーマットして返す関数
 *
 * @param {number} charCount 文字数
 * @param {number} charsPerSecond 1秒あたりの文字数 (デフォルト: 4)
 * @return {string} フォーマットされた時間（例：「3.25分（195秒）」）
 * @customfunction
 */
function ESTIMATE_INTERVIEW_TIME(charCount, charsPerSecond = 4) {
  if (typeof charCount !== 'number' || charCount < 0) {
    throw new Error('正の数値を入力してください');
  }
  
  const seconds = Math.ceil(charCount / charsPerSecond);
  const minutes = seconds / 60;

  return `${minutes.toFixed(2)}分(${seconds}秒)`;
}