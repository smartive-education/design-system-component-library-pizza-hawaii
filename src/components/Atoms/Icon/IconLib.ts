export type IconsLibType = { [index: string]: string };
const Icons: IconsLibType = {
	mumble: `
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<g fill="#475569" >
			<path d="M9.793 10H6.207a.5.5 0 0 0-.353.854l1.792 1.792a.5.5 0 0 0 .708 0l1.792-1.793A.5.5 0 0 0 9.793 10Z"/>
			<path d="M14.807 5.371A2.962 2.962 0 0 0 16 3a3 3 0 0 0-3-3 2.96 2.96 0 0 0-2.029.806 5.866 5.866 0 0 0-5.942 0A2.96 2.96 0 0 0 3 0a3 3 0 0 0-3 3c0 .974.472 1.827 1.193 2.371C.015 7.867-.64 11.017.935 13.298 2.173 15.09 4.55 16 8 16s5.827-.91 7.065-2.702c1.575-2.28.92-5.43-.258-7.927Zm-1.387 6.79C12.577 13.381 10.754 14 8 14s-4.577-.62-5.42-1.839c-1.05-1.522-.417-3.836.055-5.079C3.085 5.89 4.808 2 8 2s4.914 3.89 5.365 5.082c.472 1.243 1.106 3.557.055 5.08Z"/>
			<path d="M6.67 6.617c-.114-.442-.38-1.05-1.164-1.05-1.081 0-1.987 1.596-1.997 2.306-.01.71.473 1.483 1.07 1.483.598 0 1.123-.535 1.658-1.297.535-.762.546-.999.432-1.442ZM10.494 5.567c-.784 0-1.05.608-1.163 1.05-.114.443-.103.68.432 1.442.535.762 1.06 1.297 1.658 1.297.597 0 1.08-.772 1.07-1.483-.01-.71-.916-2.306-1.997-2.306Z"/>
		</g>
		<defs>
		<clipPath id="a">
			<path fill="#fff" d="M0 0h16v16H0z"/>
		</defs>
		</svg>
		`,
	edit: `
		<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="white"/>
				<path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="white"/>
			</g>
		</svg>
	`,
	settings: `
		<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M15.135 6.784C13.832 6.458 13.214 4.966 13.905 3.815C14.227 3.279 14.13 2.817 13.811 2.499L13.501 2.189C13.183 1.871 12.721 1.774 12.185 2.095C11.033 2.786 9.541 2.168 9.216 0.865C9.065 0.258 8.669 0 8.219 0H7.781C7.331 0 6.936 0.258 6.784 0.865C6.458 2.168 4.966 2.786 3.815 2.095C3.279 1.773 2.816 1.87 2.498 2.188L2.188 2.498C1.87 2.816 1.773 3.279 2.095 3.815C2.786 4.967 2.168 6.459 0.865 6.784C0.26 6.935 0 7.33 0 7.781V8.219C0 8.669 0.258 9.064 0.865 9.216C2.168 9.542 2.786 11.034 2.095 12.185C1.773 12.721 1.87 13.183 2.189 13.501L2.499 13.811C2.818 14.13 3.281 14.226 3.815 13.905C4.967 13.214 6.459 13.832 6.784 15.135C6.935 15.742 7.331 16 7.781 16H8.219C8.669 16 9.064 15.742 9.216 15.135C9.542 13.832 11.034 13.214 12.185 13.905C12.72 14.226 13.182 14.13 13.501 13.811L13.811 13.501C14.129 13.183 14.226 12.721 13.905 12.185C13.214 11.033 13.832 9.541 15.135 9.216C15.742 9.065 16 8.669 16 8.219V7.781C16 7.33 15.74 6.935 15.135 6.784ZM8 11C6.343 11 5 9.657 5 8C5 6.343 6.343 5 8 5C9.657 5 11 6.343 11 8C11 9.657 9.657 11 8 11Z" fill="#475569"/>
			</g>
		</svg>
	`,
	logout: `
		<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M6.293 11.955C6.35799 11.9846 6.42858 12 6.5 12C6.62106 11.9999 6.73796 11.9558 6.829 11.876L10.829 8.376C10.8825 8.32907 10.9254 8.27125 10.9548 8.20641C10.9842 8.14157 10.9994 8.07119 10.9994 8C10.9994 7.92881 10.9842 7.85844 10.9548 7.79359C10.9254 7.72875 10.8825 7.67093 10.829 7.624L6.829 4.124C6.75672 4.06084 6.66779 4.01982 6.57283 4.00584C6.47787 3.99186 6.38089 4.00551 6.29347 4.04516C6.20606 4.0848 6.1319 4.14878 6.07986 4.22943C6.02782 4.31008 6.0001 4.40401 6 4.5V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H6V11.5C6.00003 11.596 6.02767 11.6899 6.07962 11.7706C6.13158 11.8512 6.20565 11.9153 6.293 11.955Z" fill="#475569"/>
				<path d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5C1.26522 5 1.51957 4.89464 1.70711 4.70711C1.89464 4.51957 2 4.26522 2 4V2H14V14H2V12C2 11.7348 1.89464 11.4804 1.70711 11.2929C1.51957 11.1054 1.26522 11 1 11C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0Z" fill="#475569"/>
			</g>
		</svg>
	`,
	time: `
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9937 5.88022 15.1488 3.84906 13.6499 2.35014C12.1509 0.851219 10.1198 0.00633091 8 0ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C13.9953 9.58984 13.3616 11.1132 12.2374 12.2374C11.1132 13.3616 9.58984 13.9953 8 14Z" fill="#475569"/>
				<path d="M11.5 7H9V4.5C9 4.23478 8.89465 3.98043 8.70711 3.79289C8.51957 3.60536 8.26522 3.5 8 3.5C7.73479 3.5 7.48043 3.60536 7.2929 3.79289C7.10536 3.98043 7 4.23478 7 4.5V8C7 8.26522 7.10536 8.51957 7.2929 8.70711C7.48043 8.89464 7.73479 9 8 9H11.5C11.7652 9 12.0196 8.89464 12.2071 8.70711C12.3946 8.51957 12.5 8.26522 12.5 8C12.5 7.73478 12.3946 7.48043 12.2071 7.29289C12.0196 7.10536 11.7652 7 11.5 7Z" fill="#475569"/>
			</g>
		</svg>
	`,
	profile: `
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8 7C9.933 7 11.5 5.433 11.5 3.5C11.5 1.567 9.933 0 8 0C6.067 0 4.5 1.567 4.5 3.5C4.5 5.433 6.067 7 8 7Z" fill="#475569"/>
			<path d="M8 8.5C6.14413 8.50212 4.36489 9.2403 3.05259 10.5526C1.7403 11.8649 1.00212 13.6441 1 15.5C1 15.6326 1.05268 15.7598 1.14645 15.8536C1.24021 15.9473 1.36739 16 1.5 16H14.5C14.6326 16 14.7598 15.9473 14.8536 15.8536C14.9473 15.7598 15 15.6326 15 15.5C14.9979 13.6441 14.2597 11.8649 12.9474 10.5526C11.6351 9.2403 9.85587 8.50212 8 8.5Z" fill="#475569"/>
		</svg>
	`,
	comment: `
		<svg class="fillable" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path class="empty" d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.2 14 8.4 14 8.6 14L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0ZM12 10.8V13.1L8.9 12C8.9 12 8.2 12 8 12C4.7 12 2 9.8 2 7C2 4.2 4.7 2 8 2C11.3 2 14 4.2 14 7C14 9.2 12 10.8 12 10.8Z" fill="#475569"/>
			<path class="filled" d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.4 14 8.8 14 9.1 13.9L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0Z" fill="#475569"/>
		</svg>
	`,
	heart: `
		<svg class="fillable" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path class="empty" d="M7.4 15.5C6.6 14.8 0 9.30005 0 5.10005C0 2.40005 2.2 0.300049 4.8 0.300049C6 0.300049 7.1 0.800049 8 1.50005C8.9 0.700049 10 0.300049 11.2 0.300049C13.9 0.300049 16 2.50005 16 5.10005C16 9.30005 9.4 14.8 8.6 15.4C8.3 15.8 7.7 15.8 7.4 15.5ZM4.8 2.30005C3.3 2.30005 2 3.60005 2 5.10005C2 7.30005 5.5 11.1 8 13.3C10.1 11.4 14 7.50005 14 5.10005C14 3.50005 12.7 2.30005 11.2 2.30005C10.3 2.30005 9.4 2.80005 8.9 3.60005C8.5 4.20005 7.6 4.20005 7.2 3.60005C6.6 2.80005 5.8 2.30005 4.8 2.30005Z" fill="#475569"/>
			<path class="filled" d="M11.6 0C10.1 0 8.8 0.8 8 2C7.2 0.8 5.9 0 4.4 0C2 0 0 2 0 4.4C0 8.8 8 15.3 8 15.3C8 15.3 16 8.8 16 4.4C16 2 14 0 11.6 0Z" fill="#475569"/>
		</svg>
	`,
	share: `
 	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 6C13.654 6 15 4.654 15 3C15 1.346 13.654 0 12 0C10.346 0 9 1.346 9 3C9 3.224 9.029 3.44 9.075 3.65L5.856 5.661C5.344 5.254 4.704 5 4 5C2.346 5 1 6.346 1 8C1 9.654 2.346 11 4 11C4.704 11 5.344 10.746 5.856 10.339L9.075 12.351C9.029 12.56 9 12.776 9 13C9 14.654 10.346 16 12 16C13.654 16 15 14.654 15 13C15 11.346 13.654 10 12 10C11.296 10 10.657 10.254 10.144 10.661L6.925 8.649C6.971 8.44 7 8.223 7 8C7 7.776 6.971 7.56 6.925 7.351L10.145 5.339C10.657 5.746 11.296 6 12 6ZM12 2C12.551 2 13 2.448 13 3C13 3.552 12.551 4 12 4C11.449 4 11 3.552 11 3C11 2.448 11.449 2 12 2ZM4 9C3.449 9 3 8.552 3 8C3 7.448 3.449 7 4 7C4.551 7 5 7.448 5 8C5 8.552 4.551 9 4 9ZM12 12C12.551 12 13 12.448 13 13C13 13.552 12.551 14 12 14C11.449 14 11 13.552 11 13C11 12.448 11.449 12 12 12Z" fill="#475569"/>
	</svg>
 	`,
	cancel: `
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.5578 1.25777C12.3609 1.06089 12.0411 1.06277 11.8465 1.26196L8.00004 5.20004L4.15354 1.26196C3.95898 1.06277 3.63919 1.06089 3.4423 1.25777L1.25777 3.4423C1.06089 3.63919 1.06277 3.95898 1.26196 4.15354L5.20004 8.00004L1.26196 11.8465C1.06277 12.0411 1.06089 12.3609 1.25777 12.5578L3.4423 14.7423C3.63919 14.9392 3.95898 14.9373 4.15354 14.7381L8.00004 10.8L11.8465 14.7381C12.0411 14.9373 12.3609 14.9392 12.5578 14.7423L14.7423 12.5578C14.9392 12.3609 14.9373 12.0411 14.7381 11.8465L10.8 8.00004L14.7381 4.15354C14.9373 3.95898 14.9392 3.63919 14.7423 3.4423L12.5578 1.25777Z" fill="#475569"/>
	</svg>
	`,
};

export default Icons;
export const IconNames = Object.keys(Icons);
