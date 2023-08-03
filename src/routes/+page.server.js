

export function load({ cookies }) {
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', { path: '/' });

	return {
		visited
	};
}

export const actions = {
	default: async ({ request, fetch, cookies}) => {
		const data = await request.formData();




        if (cookies.get('num_questions')) {
            if (parseInt(cookies.get('num_questions')) >= 10) {
                return {'answer': "Sorry, I don't have enough money for you to be asking all these questions! Contact the real me for more!"}
            } 
            cookies.set('num_questions', parseInt(cookies.get('num_questions')) + 1);
        } else {
            cookies.set('num_questions', 1);
        }

        const response = await fetch('/api/askquestion', {
            method: 'POST',
            body: JSON.stringify({"prompt":data.get('question')}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const responseData = await response.json();

        let answer = responseData['answer'];

        return {'answer': answer}

	}
};