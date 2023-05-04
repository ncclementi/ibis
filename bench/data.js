window.BENCHMARK_DATA = {
  "lastUpdate": 1683213290988,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "ad08da480bca7090dcd0090b731137da8a04923c",
          "message": "refactor(pyspark): remove useless window branching in compiler",
          "timestamp": "2023-05-04T17:09:43+02:00",
          "tree_id": "116d7def0fd68703d60dcf339e417842bf016a2c",
          "url": "https://github.com/ibis-project/ibis/commit/ad08da480bca7090dcd0090b731137da8a04923c"
        },
        "date": 1683213210659,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.3904555393384,
            "unit": "iter/sec",
            "range": "stddev: 0.0074511292039334985",
            "extra": "mean: 11.186876652171508 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.03961976058729,
            "unit": "iter/sec",
            "range": "stddev: 0.0007188613980401268",
            "extra": "mean: 9.800114919540782 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.54699240969853,
            "unit": "iter/sec",
            "range": "stddev: 0.006071228301206224",
            "extra": "mean: 5.2757365721664335 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.665703869841427,
            "unit": "iter/sec",
            "range": "stddev: 0.0011137416835164764",
            "extra": "mean: 600.3468072000089 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 285.8884058305277,
            "unit": "iter/sec",
            "range": "stddev: 0.00023401793442518146",
            "extra": "mean: 3.4978683276606604 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.8449162919461,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330491135318854",
            "extra": "mean: 5.68682917360973 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.68259823265575,
            "unit": "iter/sec",
            "range": "stddev: 0.003371017147971484",
            "extra": "mean: 4.334960710783422 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.21382512889333,
            "unit": "iter/sec",
            "range": "stddev: 0.00008050480603359644",
            "extra": "mean: 7.923062303030354 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.57473763973898,
            "unit": "iter/sec",
            "range": "stddev: 0.0007991590567728946",
            "extra": "mean: 9.844967589744194 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7988030984876875,
            "unit": "iter/sec",
            "range": "stddev: 0.0025400880032641028",
            "extra": "mean: 1.2518729608000059 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.27625753343858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006498838862362029",
            "extra": "mean: 9.777440279070206 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.74672310968522,
            "unit": "iter/sec",
            "range": "stddev: 0.012149577990804284",
            "extra": "mean: 10.899571844157073 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7170489.892119194,
            "unit": "iter/sec",
            "range": "stddev: 5.0568043563184355e-9",
            "extra": "mean: 139.46048527298606 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2137.5928027255904,
            "unit": "iter/sec",
            "range": "stddev: 0.00010347651025989015",
            "extra": "mean: 467.8159463883511 usec\nrounds: 1343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.75886021566264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007192125270738009",
            "extra": "mean: 22.85251478378473 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5579496.350427154,
            "unit": "iter/sec",
            "range": "stddev: 9.432822276394684e-9",
            "extra": "mean: 179.2276465818581 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.0306715568663,
            "unit": "iter/sec",
            "range": "stddev: 0.00031948035226768423",
            "extra": "mean: 5.262308404255426 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1985492.5193390243,
            "unit": "iter/sec",
            "range": "stddev: 1.0774116474908469e-7",
            "extra": "mean: 503.65337076812693 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2250.6567551096437,
            "unit": "iter/sec",
            "range": "stddev: 0.00009001147029075202",
            "extra": "mean: 444.31475289588695 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.98895238594879,
            "unit": "iter/sec",
            "range": "stddev: 0.0007208289659734237",
            "extra": "mean: 9.524811680412911 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 281.04616462534904,
            "unit": "iter/sec",
            "range": "stddev: 0.00026862945844556113",
            "extra": "mean: 3.5581343062733426 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4480.528321122425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000317257621853249",
            "extra": "mean: 223.18796542044586 usec\nrounds: 2140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.15812239791995,
            "unit": "iter/sec",
            "range": "stddev: 0.013790480059641045",
            "extra": "mean: 11.216028030928227 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.0436218101657,
            "unit": "iter/sec",
            "range": "stddev: 0.00009389123917623105",
            "extra": "mean: 6.133327933332566 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.72052397327809,
            "unit": "iter/sec",
            "range": "stddev: 0.000717998204900104",
            "extra": "mean: 9.73515283333389 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147744.3655043876,
            "unit": "iter/sec",
            "range": "stddev: 3.931630286522444e-7",
            "extra": "mean: 6.768447626317789 usec\nrounds: 36631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.26492824899525,
            "unit": "iter/sec",
            "range": "stddev: 0.015360741855337545",
            "extra": "mean: 11.329528271738932 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.40731811847205,
            "unit": "iter/sec",
            "range": "stddev: 0.0004075606907132318",
            "extra": "mean: 15.288809093023865 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.7583290298269,
            "unit": "iter/sec",
            "range": "stddev: 0.00005402986531748193",
            "extra": "mean: 857.0755186564742 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9680308887071261,
            "unit": "iter/sec",
            "range": "stddev: 0.002555357250018888",
            "extra": "mean: 1.0330248875999928 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.94918084451237,
            "unit": "iter/sec",
            "range": "stddev: 0.003929498651688477",
            "extra": "mean: 6.213141283185943 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.45797562657299,
            "unit": "iter/sec",
            "range": "stddev: 0.00005260871202628062",
            "extra": "mean: 9.135926315790835 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1048644.3085421938,
            "unit": "iter/sec",
            "range": "stddev: 1.1954015596168977e-7",
            "extra": "mean: 953.6121941959345 nsec\nrounds: 81301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.78052556723285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943833482018092",
            "extra": "mean: 38.788968727270785 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2187.501435241747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008820171376636117",
            "extra": "mean: 457.14255720681945 usec\nrounds: 1346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.447993916386487,
            "unit": "iter/sec",
            "range": "stddev: 0.00007877197424807845",
            "extra": "mean: 32.842886225808805 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.35055382828102,
            "unit": "iter/sec",
            "range": "stddev: 0.00005484694550877696",
            "extra": "mean: 6.011401687500673 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.3491069136164,
            "unit": "iter/sec",
            "range": "stddev: 0.000005323055234513116",
            "extra": "mean: 570.0119754153583 usec\nrounds: 1383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4503809.734725611,
            "unit": "iter/sec",
            "range": "stddev: 1.3052798915890709e-8",
            "extra": "mean: 222.03424631619063 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.64949580651023,
            "unit": "iter/sec",
            "range": "stddev: 0.00016309389092668573",
            "extra": "mean: 8.956601127272538 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1959948.9770063343,
            "unit": "iter/sec",
            "range": "stddev: 7.870433331564981e-8",
            "extra": "mean: 510.21736368230376 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14166.313310783502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013944082606219808",
            "extra": "mean: 70.58999600402686 usec\nrounds: 6006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.21827188845658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007934088583182402",
            "extra": "mean: 10.28613223188487 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.87927681779442,
            "unit": "iter/sec",
            "range": "stddev: 0.000473902755948973",
            "extra": "mean: 17.895721937502884 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.02829294056832,
            "unit": "iter/sec",
            "range": "stddev: 0.0007766521897408805",
            "extra": "mean: 9.801202893617967 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3542624541578927,
            "unit": "iter/sec",
            "range": "stddev: 0.0014939679196922847",
            "extra": "mean: 738.4093068000027 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2175.7460915573233,
            "unit": "iter/sec",
            "range": "stddev: 0.00008861742511267207",
            "extra": "mean: 459.6124538062411 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.12680570841934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002817695242143471",
            "extra": "mean: 3.4949539157091802 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12376.053957776227,
            "unit": "iter/sec",
            "range": "stddev: 0.00001814426193608115",
            "extra": "mean: 80.80119910689882 usec\nrounds: 5821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.599316073465361,
            "unit": "iter/sec",
            "range": "stddev: 0.0010964747847372087",
            "extra": "mean: 384.716583799991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.62922172908185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003554249316414034",
            "extra": "mean: 3.6814890299151326 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.3827947384687,
            "unit": "iter/sec",
            "range": "stddev: 0.0002521220395449278",
            "extra": "mean: 3.644543386742461 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11665113.5029312,
            "unit": "iter/sec",
            "range": "stddev: 3.0208807101821e-9",
            "extra": "mean: 85.72569823247456 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.01059779463523,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357800914465843",
            "extra": "mean: 20.403750311110493 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.47798739180879,
            "unit": "iter/sec",
            "range": "stddev: 0.0003778327806507647",
            "extra": "mean: 117.95252266666188 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1922604.0688759787,
            "unit": "iter/sec",
            "range": "stddev: 8.565009534164243e-8",
            "extra": "mean: 520.1278912223643 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 81.06758428014889,
            "unit": "iter/sec",
            "range": "stddev: 0.022267622410556756",
            "extra": "mean: 12.335386688522195 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2240.4023807725257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007869089512716179",
            "extra": "mean: 446.34839195947666 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1638056.6477709154,
            "unit": "iter/sec",
            "range": "stddev: 1.021078691825611e-7",
            "extra": "mean: 610.4794979836688 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.6965653721387,
            "unit": "iter/sec",
            "range": "stddev: 0.00006944379512605372",
            "extra": "mean: 1.4647795971478175 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 427.1624343830731,
            "unit": "iter/sec",
            "range": "stddev: 0.00008326294337181681",
            "extra": "mean: 2.341029827316731 msec\nrounds: 388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6215817.569587805,
            "unit": "iter/sec",
            "range": "stddev: 4.8720373917229595e-9",
            "extra": "mean: 160.87988246192708 nsec\nrounds: 62108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2251.2792618181265,
            "unit": "iter/sec",
            "range": "stddev: 0.00008516642154713192",
            "extra": "mean: 444.1918943420653 usec\nrounds: 1202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 287.3986967539226,
            "unit": "iter/sec",
            "range": "stddev: 0.0002614736161750059",
            "extra": "mean: 3.479486898495657 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9557514773234524,
            "unit": "iter/sec",
            "range": "stddev: 0.004996412152668193",
            "extra": "mean: 1.0462971010000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.22237366903352,
            "unit": "iter/sec",
            "range": "stddev: 0.028131870760735575",
            "extra": "mean: 26.86556233333211 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10431.805403127677,
            "unit": "iter/sec",
            "range": "stddev: 0.00002607927350216771",
            "extra": "mean: 95.86068387550431 usec\nrounds: 4552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.2845891331924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000264803526680965",
            "extra": "mean: 7.5027428639982645 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.32583991757063,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593930994335624",
            "extra": "mean: 9.317420676772985 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 106.6247606964394,
            "unit": "iter/sec",
            "range": "stddev: 0.00010989987497635598",
            "extra": "mean: 9.37868458947354 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2200.9425732727336,
            "unit": "iter/sec",
            "range": "stddev: 0.00008298839012011073",
            "extra": "mean: 454.3507914034444 usec\nrounds: 1419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.54086621487134,
            "unit": "iter/sec",
            "range": "stddev: 0.0011293827112865906",
            "extra": "mean: 24.666468513521217 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.6342432446092,
            "unit": "iter/sec",
            "range": "stddev: 0.020707226405288555",
            "extra": "mean: 12.557411978265954 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.4144914984852,
            "unit": "iter/sec",
            "range": "stddev: 0.000716886819183055",
            "extra": "mean: 9.397216355765181 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.7809488926054,
            "unit": "iter/sec",
            "range": "stddev: 0.000022819072359552055",
            "extra": "mean: 1.8594931673559518 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.97429837552313,
            "unit": "iter/sec",
            "range": "stddev: 0.0008293459954731434",
            "extra": "mean: 9.903510260413029 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17284512958456993,
            "unit": "iter/sec",
            "range": "stddev: 0.07252938873680101",
            "extra": "mean: 5.785526051 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.0962087272361,
            "unit": "iter/sec",
            "range": "stddev: 0.0007508200562785471",
            "extra": "mean: 9.891567770835627 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.1912996105941,
            "unit": "iter/sec",
            "range": "stddev: 0.000011432004345903413",
            "extra": "mean: 1.3329933318595875 msec\nrounds: 678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.735548999884266,
            "unit": "iter/sec",
            "range": "stddev: 0.00010717591798222763",
            "extra": "mean: 53.37447010526232 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.06846591826736,
            "unit": "iter/sec",
            "range": "stddev: 0.00033542156657783963",
            "extra": "mean: 18.843582204545648 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8580.228156834208,
            "unit": "iter/sec",
            "range": "stddev: 0.000013943055977832579",
            "extra": "mean: 116.54701736614001 usec\nrounds: 4146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.4050080500789,
            "unit": "iter/sec",
            "range": "stddev: 0.0004221581005519052",
            "extra": "mean: 10.162084428580036 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 319.65435190835103,
            "unit": "iter/sec",
            "range": "stddev: 0.00001974545384581131",
            "extra": "mean: 3.128379119602015 msec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2143.017936055239,
            "unit": "iter/sec",
            "range": "stddev: 0.00008486263907994505",
            "extra": "mean: 466.6316521086848 usec\nrounds: 1328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.25509776495505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524469898177646",
            "extra": "mean: 3.5056341072788872 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6135319.176889309,
            "unit": "iter/sec",
            "range": "stddev: 7.1526164947517696e-9",
            "extra": "mean: 162.99070531906082 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 255.35850506228758,
            "unit": "iter/sec",
            "range": "stddev: 0.00048714651166203055",
            "extra": "mean: 3.9160630258078855 msec\nrounds: 155"
          }
        ]
      }
    ]
  }
}