SET sql_mode = 'STRICT_ALL_TABLES';
CREATE TABLE IF NOT EXISTS instance(
	instance_hash VARCHAR(256) NOT NULL,
	url varchar(100) NOT NULL,
	title varchar(30) NOT NULL,
	PRIMARY KEY (url,instance_hash)
);

CREATE TABLE IF NOT EXISTS bookmark(
	url varchar(100) NOT NULL,
	title varchar(30) NOT NULL,
	PRIMARY KEY (url)
);

CREATE TABLE IF NOT EXISTS person(
	person_id int NOT NULL,
	PRIMARY KEY (person_id)
);

CREATE TABLE IF NOT EXISTS `group`(
    group_id INT NOT NULL,
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(person_id),
    PRIMARY KEY (group_id, person_id)
);

CREATE TABLE IF NOT EXISTS bookmark_group(
	group_id int NOT NULL,
	url varchar(100) NOT NULL,
	FOREIGN KEY (group_id) REFERENCES `group`(group_id),
	FOREIGN KEY (url) REFERENCES bookmark(url),
    PRIMARY KEY (group_id, url)
);