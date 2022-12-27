import { Post as PostType } from '../types/Post';
import { User } from '../types/User';
import { All as UserList } from './User';

const getRandUser = (): User => UserList[Math.floor(Math.random() * UserList.length)];
const getRandUsers = (): User[] => {
	const users = [];
	for (let i = 0; i < Math.floor(Math.random() * UserList.length); i++) {
		users.push(getRandUser());
	}
	return users;
};

export const All: PostType[] = [
	{
		id: 1,
		body: 'Sed ante. Vivamus tortor. Duis mattis #egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla #neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		image: '//picsum.photos/id/20/1600/1281/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: 1001,
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-26T08:50:23Z',
				updatedAt: null,
			},
			{
				id: 1002,
				body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				author: getRandUser(),
				image: null,
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-07-04T23:13:55Z',
				updatedAt: null,
			},
			{
				id: 5,
				body: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-12T20:01:11Z',
				updatedAt: null,
			},
		],
		createdAt: '2022-08-05T02:41:51Z',
		updatedAt: null,
	},
	{
		id: 2,
		body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet http://www.eleifend.ch pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\n#magna\n#vulputate\n#luctus',
		image: null,
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-12-26T08:50:23Z',
		updatedAt: null,
	},
	{
		id: 3,
		body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
		image: '//picsum.photos/id/22/1600/1031/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: 1001,
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-26T08:50:23Z',
				updatedAt: null,
			},
			{
				id: 5,
				body: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-12T20:01:11Z',
				updatedAt: null,
			},
		],
		createdAt: '2022-07-04T23:13:55Z',
		updatedAt: null,
	},
	{
		id: 4,
		body: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere http://www.cubilia.com Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\n#vulputate #eros',
		image: '//picsum.photos/id/23/1600/1161/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-07-07T14:33:06Z',
		updatedAt: '2022-08-05T17:04:45Z',
	},
	{
		id: 5,
		body: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
		image: null,
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-12-12T20:01:11Z',
		updatedAt: null,
	},
	{
		id: 6,
		body: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
		image: null,
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: 1001,
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-26T08:50:23Z',
				updatedAt: null,
			},
			{
				id: 1002,
				body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				author: getRandUser(),
				image: null,
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-07-04T23:13:55Z',
				updatedAt: null,
			},
			{
				id: 5,
				body: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-12T20:01:11Z',
				updatedAt: null,
			},
		],
		createdAt: '2022-11-23T23:46:28Z',
		updatedAt: '2022-12-07T03:56:03Z',
	},
	{
		id: 7,
		body: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
		image: '//picsum.photos/id/24/1600/1154/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-03-29T12:19:10Z',
		updatedAt: '2022-05-03T10:00:06Z',
	},
	{
		id: 8,
		body: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\n #vulputate #eros',
		image: '//picsum.photos/id/25/1600/1539/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-09-07T18:19:08Z',
		updatedAt: null,
	},
	{
		id: 9,
		body: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		image: null,
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-11-06T19:58:38Z',
		updatedAt: null,
	},
	{
		id: 10,
		body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et http://www.magnis-dis-parturient.com montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\n#odio #justo',
		image: '//picsum.photos/id/26/1600/1157/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: 1001,
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-26T08:50:23Z',
				updatedAt: null,
			},
		],
		createdAt: '2023-01-01T05:09:01Z',
		updatedAt: null,
	},
	{
		id: 11,
		body: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\n#magna',
		image: '//picsum.photos/id/27/1600/1132/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-04-03T08:46:51Z',
		updatedAt: null,
	},
	{
		id: 12,
		body: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\n#magna',
		image: '//picsum.photos/id/28/1600/938/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-09-23T06:02:20Z',
		updatedAt: null,
	},
	{
		id: 13,
		body: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
		image: '//picsum.photos/id/29/1600/1001/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-10-12T02:12:07Z',
		updatedAt: null,
	},
	{
		id: 14,
		body: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
		image: null,
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: 1001,
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-12-26T08:50:23Z',
				updatedAt: null,
			},
			{
				id: 1002,
				body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				author: getRandUser(),
				image: null,
				likes: getRandUsers(),
				comments: [],
				createdAt: '2022-07-04T23:13:55Z',
				updatedAt: null,
			},
		],
		createdAt: '2022-06-15T05:06:48Z',
		updatedAt: null,
	},
	{
		id: 15,
		body: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\n#magna #vulputate',
		image: '//picsum.photos/id/30/1600/1587/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: '2022-01-28T17:00:28Z',
		updatedAt: '2022-07-02T01:34:50Z',
	},
];
