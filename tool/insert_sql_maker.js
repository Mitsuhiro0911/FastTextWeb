const fs = require('fs');
const readline = require('readline');

for (var i = 0; i <= 100; i++) {
    var feature = readline.createInterface({ input: fs.createReadStream(
        '/Users/Nakamura/IdeaProjects/AnalysisWordByWord2Vec/data/corpas/high_performance_model/model_201907_' + ("000" + i).slice( -3 ) + '.vec',
        'utf8') }
    );
    const writer = fs.createWriteStream('./mysql_init/feature_sql_' + ("000" + i).slice( -3 ) + '.sql');

    feature.on('line', (line) => {
        let word = line.split(' ')[0];
        writer.write('insert into wiki_feature values (');
        writer.write('NULL,');
        writer.write(`"${word.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}",`);
        // wordを除外し、スペースをカンマに置換し、末尾の文字(余分なカンマ)を削除
        writer.write(line
            .replace(word + ' ', '')
            .replace(/ /g, ',')
            .slice(0, -1));
        writer.write(');' + '\n')
    });
}
