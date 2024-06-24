import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizImageSize: 145,
  quizLink: "https://wa.me/5551981059938",
  quizQrcodeColor: { r: 31, g: 37, b: 103, a: 1 },
  quizQrcodeSize: 479,
  quizShowImage: true,
  quizShowQrcode: true,
  quizShowText: true,
  quizSubtitle: "pelo whatsapp",
  quizTextColor: { r: 40, g: 43, b: 105, a: 1 },
  quizTextSize: 1.8,
  quizTitle: "Acesse a Rádio Novo Tempo",
  visitantesImageSize: 277,
  visitantesLink:
    "https://minhaes.org/interessados-recepcao/interessados-recepcao.php?key=TWpVMU5nPT0=",
  visitantesQrcodeColor: { r: 64, g: 51, b: 51, a: 1 },
  visitantesQrcodeSize: 371,
  visitantesShowImage: true,
  visitantesShowQrcode: true,
  visitantesShowText: true,
  visitantesSubtitle: "Acesse com sua câmera",
  visitantesTextColor: { r: 99, g: 99, b: 99, a: 100 },
  visitantesTextSize: 1.2,
  visitantesTitle: "Primeira vez?",
};

export const booleansSlice = createSlice({
  name: "booleans",
  initialState,
  reducers: {
    setAudioGender: (state, action) => {
      state.audioGender = action.payload;
    },
    setShowPainel: (state, action) => {
      state.showPainel = !state.showPainel;
    },
    setFullScreen: (state, action) => {
      state.fullScreen = action.payload;
    },
    setShowQuizCenterPlace: (state, action) => {
      state.showQuizCenterPlace = action.payload;
    },
    setShowVisitantesCenterPlace: (state, action) => {
      state.showVisitantesCenterPlace = action.payload;
    },
    setShowTimerCenterPlace: (state, action) => {
      state.showTimerCenterPlace = action.payload;
    },
    setShowCenterPlace: (state, action) => {
      console.log(action);
      state.showCenterPlace = action.payload;
    },
    setShowTimer: (state, action) => {
      state.showTimer = !state.showTimer;
    },
    setShowBothQr: (state, action) => {
      state.showBothQr = !state.showBothQr;
    },
    setDisplayPlaceQuiz: (state, action) => {
      state.showQrQuizPlace = true;
    },
    setHidePlaceQuiz: (state, action) => {
      state.showQrQuizPlace = false;
    },
    setDisplayPlaceVisitantes: (state, action) => {
      state.showQrVisitantesPlace = true;
    },
    setHidePlaceVisitantes: (state, action) => {
      state.showQrVisitantesPlace = false;
    },
    setShowQrVisitantesPlace: (state, action) => {
      state.showQrVisitantesPlace = !state.showQrVisitantesPlace;
    },
    setShowQrQuizPlace: (state, action) => {
      state.showQrQuizPlace = !state.showQrQuizPlace;
    },
    setShowLogoQuiz: (state, action) => {
      state.showLogoQuiz = !state.showLogoQuiz;
    },
    setShowQRCodeQuiz: (state, action) => {
      state.showQRCodeQuiz = !state.showQRCodeQuiz;
    },
    setShowLogoVisitantes: (state, action) => {
      state.showLogoVisitantes = !state.showLogoVisitantes;
    },
    setShowQRCodeVisitantes: (state, action) => {
      state.showQRCodeVisitantes = !state.showQRCodeVisitantes;
    },
    setShowTextoQuiz: (state, action) => {
      state.showTextoQuiz = !state.showTextoQuiz;
    },
    setShowTextoVisitantes: (state, action) => {
      state.showTextoVisitantes = !state.showTextoVisitantes;
    },
    setAudioEnable: (state, action) => {
      state.audioEnable = !state.audioEnable;
    },
    setShowFullScreen: (state, action) => {
      state.showFullScreen = !state.showFullScreen;
    },
    displayShowFullScreen: (state, action) => {
      state.showFullScreen = true;
    },
    hideShowFullScreen: (state, action) => {
      state.showFullScreen = false;
    },
    setShowQuizLeftPlace: (state, action) => {
      state.showQuizLeftPlace = action.payload;
    },
    setShowLeftPlace: (state, action) => {
      state.showLeftPlace = action.payload;
    },
    setShowTimerLeftPlace: (state, action) => {
      state.showTimerLeftPlace = action.payload;
    },

    setShowVisitantesLeftPlace: (state, action) => {
      state.showVisitantesLeftPlace = action.payload;
    },
    setShowQuizRightPlace(state, action) {
      state.showQuizRightPlace = action.payload;
    },
    setShowRightPlace(state, action) {
      state.showRightPlace = action.payload;
    },
    setShowTimerRightPlace(state, action) {
      state.showTimerRightPlace = action.payload;
    },
    setShowVisitantesRightPlace(state, action) {
      state.showVisitantesRightPlace = action.payload;
    },
    importState: (state, action) => {
      return {
        ...state,
        ...action.payload.booleans,
      };
    },
  },
});

export const {
  setShowTimer,
  setShowLogoQuiz,
  setShowBothQr,
  setShowLogoVisitantes,
  setShowTextoQuiz,
  setAudioEnable,
  setShowQRCodeQuiz,
  setShowQRCodeVisitantes,
  setShowTextoVisitantes,
  setDisplayPlaceQuiz,
  setDisplayPlaceVisitantes,
  setHidePlaceQuiz,
  setHidePlaceVisitantes,
  setShowFullScreen,
  displayShowFullScreen,
  hideShowFullScreen,
  setShowQuizCenterPlace,
  setShowVisitantesCenterPlace,
  setShowTimerCenterPlace,
  setShowCenterPlace,
  setShowQuizLeftPlace,
  setShowLeftPlace,
  setShowTimerLeftPlace,
  setShowVisitantesLeftPlace,
  setShowQuizRightPlace,
  setShowRightPlace,
  setShowTimerRightPlace,
  setShowVisitantesRightPlace,
  setFullScreen,
  setAudioGender,
  importState,
  setShowPainel,
} = booleansSlice.actions;
export default booleansSlice.reducer;
