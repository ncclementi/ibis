window.BENCHMARK_DATA = {
  "lastUpdate": 1684226320686,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "501aaf77b1d7cb7ff9a82275369c023494344adf",
          "message": "fix(bigquery): raise OperationNotDefinedError for IntervalAdd and IntervalSubtract",
          "timestamp": "2023-05-16T10:33:35+02:00",
          "tree_id": "aec41a6fe79326d8c9278da6da903d3284337d7e",
          "url": "https://github.com/ibis-project/ibis/commit/501aaf77b1d7cb7ff9a82275369c023494344adf"
        },
        "date": 1684226240042,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.89764871371722,
            "unit": "iter/sec",
            "range": "stddev: 0.007509898166959575",
            "extra": "mean: 10.214749926469706 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.04133932747996,
            "unit": "iter/sec",
            "range": "stddev: 0.000727488200261892",
            "extra": "mean: 9.896939279070232 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2219.009125895353,
            "unit": "iter/sec",
            "range": "stddev: 0.0001244676082350339",
            "extra": "mean: 450.6515941418257 usec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.449355103426416,
            "unit": "iter/sec",
            "range": "stddev: 0.00009457989441141298",
            "extra": "mean: 32.84141803999887 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2170.081297114434,
            "unit": "iter/sec",
            "range": "stddev: 0.00006603206974374613",
            "extra": "mean: 460.81222916842063 usec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.49255214420614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005872595357529661",
            "extra": "mean: 9.390328054546547 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5175048570108576,
            "unit": "iter/sec",
            "range": "stddev: 0.004720151123634961",
            "extra": "mean: 397.21869739998965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 617.2831279557,
            "unit": "iter/sec",
            "range": "stddev: 0.004103305062534727",
            "extra": "mean: 1.6200021589959381 msec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8536.719662982181,
            "unit": "iter/sec",
            "range": "stddev: 0.000015124675496821554",
            "extra": "mean: 117.1410142863546 usec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13853.806078001482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032606195316427396",
            "extra": "mean: 72.18232984998284 usec\nrounds: 6124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4481.293070658817,
            "unit": "iter/sec",
            "range": "stddev: 0.000026176401423637425",
            "extra": "mean: 223.14987755375375 usec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.5020865017159,
            "unit": "iter/sec",
            "range": "stddev: 0.0007233196090754953",
            "extra": "mean: 10.470975416668336 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 34.52889875461699,
            "unit": "iter/sec",
            "range": "stddev: 0.0504464141099445",
            "extra": "mean: 28.961248000018713 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.00325212119431,
            "unit": "iter/sec",
            "range": "stddev: 0.0002246593924276264",
            "extra": "mean: 17.240412622219182 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.57739509525848,
            "unit": "iter/sec",
            "range": "stddev: 0.01342352262342477",
            "extra": "mean: 10.80177292708484 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2606587.004502897,
            "unit": "iter/sec",
            "range": "stddev: 1.9099456937333622e-8",
            "extra": "mean: 383.6434380562629 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2184.4432073712665,
            "unit": "iter/sec",
            "range": "stddev: 0.00008796033921563536",
            "extra": "mean: 457.7825583313692 usec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2467130.7344444753,
            "unit": "iter/sec",
            "range": "stddev: 1.7526981882658676e-8",
            "extra": "mean: 405.3291485689711 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.03221173610171,
            "unit": "iter/sec",
            "range": "stddev: 0.000634696670515034",
            "extra": "mean: 9.612407381443528 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 287.7359747851692,
            "unit": "iter/sec",
            "range": "stddev: 0.00022944108030177777",
            "extra": "mean: 3.475408317457088 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.09315882274731,
            "unit": "iter/sec",
            "range": "stddev: 0.0006835945680583067",
            "extra": "mean: 9.79497560395977 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.8612705089379,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895731363728027",
            "extra": "mean: 10.115184590001718 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4503857.349291427,
            "unit": "iter/sec",
            "range": "stddev: 1.2232001307103511e-8",
            "extra": "mean: 222.03189898025477 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.07199417459168,
            "unit": "iter/sec",
            "range": "stddev: 0.0007516967763016237",
            "extra": "mean: 9.893937565658405 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 275.04322889321145,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049775708933075",
            "extra": "mean: 3.6357921044777326 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9437579601158826,
            "unit": "iter/sec",
            "range": "stddev: 0.004042638568934526",
            "extra": "mean: 1.0595937118000165 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1935619.9096732582,
            "unit": "iter/sec",
            "range": "stddev: 9.897563187127141e-8",
            "extra": "mean: 516.6303544422649 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 85.5938014338528,
            "unit": "iter/sec",
            "range": "stddev: 0.016788073345954963",
            "extra": "mean: 11.68308899999965 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10565.503526271807,
            "unit": "iter/sec",
            "range": "stddev: 0.000002739038771414522",
            "extra": "mean: 94.64764244443585 usec\nrounds: 5023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.23011092628899,
            "unit": "iter/sec",
            "range": "stddev: 0.0007432100642313496",
            "extra": "mean: 9.97704173684311 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.59774293519929,
            "unit": "iter/sec",
            "range": "stddev: 0.00018834741427154543",
            "extra": "mean: 7.899034981309762 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2025.882942483387,
            "unit": "iter/sec",
            "range": "stddev: 0.00009559924930636233",
            "extra": "mean: 493.61193533431424 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.47671404472248,
            "unit": "iter/sec",
            "range": "stddev: 0.000052597439939906185",
            "extra": "mean: 6.079888000000366 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 233.214798172692,
            "unit": "iter/sec",
            "range": "stddev: 0.00402021674935926",
            "extra": "mean: 4.287892568719053 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 319.5526589125877,
            "unit": "iter/sec",
            "range": "stddev: 0.000028931254916178594",
            "extra": "mean: 3.1293746808520404 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 238.55499288971325,
            "unit": "iter/sec",
            "range": "stddev: 0.0002531367422414003",
            "extra": "mean: 4.1919055555559535 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7098057.990162996,
            "unit": "iter/sec",
            "range": "stddev: 3.5968495999466422e-9",
            "extra": "mean: 140.88360526017354 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.36871112196988,
            "unit": "iter/sec",
            "range": "stddev: 0.011260510429125506",
            "extra": "mean: 4.621740337660406 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.977054919166907,
            "unit": "iter/sec",
            "range": "stddev: 0.00044514611949968006",
            "extra": "mean: 38.495510869562054 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6174284.472155098,
            "unit": "iter/sec",
            "range": "stddev: 8.524026315884228e-9",
            "extra": "mean: 161.96208718756293 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 290.6442474903961,
            "unit": "iter/sec",
            "range": "stddev: 0.00022447653273118716",
            "extra": "mean: 3.4406323491162287 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 421.3449466708083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003333661467005098",
            "extra": "mean: 2.373352304095124 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.40925244514646,
            "unit": "iter/sec",
            "range": "stddev: 0.0005196509504509445",
            "extra": "mean: 11.847042486839367 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6671930828825687,
            "unit": "iter/sec",
            "range": "stddev: 0.0023913352698602115",
            "extra": "mean: 599.8105500000065 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.12121168149386,
            "unit": "iter/sec",
            "range": "stddev: 0.00033217547825651223",
            "extra": "mean: 9.423186789473746 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2167.2352837384046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000847491148185846",
            "extra": "mean: 461.4173677880674 usec\nrounds: 1248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 102.9644831814029,
            "unit": "iter/sec",
            "range": "stddev: 0.00045150591359448456",
            "extra": "mean: 9.712086819667704 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.98535403537862,
            "unit": "iter/sec",
            "range": "stddev: 0.0001255555711330389",
            "extra": "mean: 9.52513814129744 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2134.699176075338,
            "unit": "iter/sec",
            "range": "stddev: 0.00008571240833162523",
            "extra": "mean: 468.4500800897427 usec\nrounds: 1336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.29855075054198,
            "unit": "iter/sec",
            "range": "stddev: 0.0006370590457337326",
            "extra": "mean: 9.319790370001328 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1697845.7541621756,
            "unit": "iter/sec",
            "range": "stddev: 8.062924587216456e-8",
            "extra": "mean: 588.9816536917767 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11677935.32345532,
            "unit": "iter/sec",
            "range": "stddev: 3.1814603656075966e-9",
            "extra": "mean: 85.63157547133514 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.0017109606306,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526574472362148",
            "extra": "mean: 10.526126212762707 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2839276906849046,
            "unit": "iter/sec",
            "range": "stddev: 0.0829582772564833",
            "extra": "mean: 778.8600613999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.74214132876562,
            "unit": "iter/sec",
            "range": "stddev: 0.0007080572049710723",
            "extra": "mean: 27.21670441175661 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.7464018694218,
            "unit": "iter/sec",
            "range": "stddev: 0.00009762486752297658",
            "extra": "mean: 1.8735489297867804 msec\nrounds: 470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.048173115532734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000909551671482652",
            "extra": "mean: 52.498472894734206 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 275.742213635122,
            "unit": "iter/sec",
            "range": "stddev: 0.00024387121776641677",
            "extra": "mean: 3.6265756585361197 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.67630381789778,
            "unit": "iter/sec",
            "range": "stddev: 0.000037466467082550334",
            "extra": "mean: 5.033312885247642 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.476129086861597,
            "unit": "iter/sec",
            "range": "stddev: 0.0004805162862815432",
            "extra": "mean: 117.9783825555521 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7914131844234111,
            "unit": "iter/sec",
            "range": "stddev: 0.004247427883537907",
            "extra": "mean: 1.2635624723999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.74682524477763,
            "unit": "iter/sec",
            "range": "stddev: 0.019079219190250712",
            "extra": "mean: 12.384387831578255 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.0060278995394,
            "unit": "iter/sec",
            "range": "stddev: 0.0002639196226612211",
            "extra": "mean: 3.5970443071161076 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6239928.242737321,
            "unit": "iter/sec",
            "range": "stddev: 5.029631690228032e-9",
            "extra": "mean: 160.25825315603794 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.75071054579655,
            "unit": "iter/sec",
            "range": "stddev: 0.0003198394445805065",
            "extra": "mean: 15.208961115385696 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.76311244204382,
            "unit": "iter/sec",
            "range": "stddev: 0.00011608732825515814",
            "extra": "mean: 9.02827645370876 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1766.0909169206084,
            "unit": "iter/sec",
            "range": "stddev: 0.000005691598335483118",
            "extra": "mean: 566.2222654672955 usec\nrounds: 1390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5572111.225106853,
            "unit": "iter/sec",
            "range": "stddev: 7.854543155546897e-9",
            "extra": "mean: 179.46519005121795 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 731.7461183565083,
            "unit": "iter/sec",
            "range": "stddev: 0.00008372427444116784",
            "extra": "mean: 1.3665941983347807 msec\nrounds: 600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.289431692862145,
            "unit": "iter/sec",
            "range": "stddev: 0.0004606847164941343",
            "extra": "mean: 23.1003263589826 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 281.0706027642487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002560965340382378",
            "extra": "mean: 3.5578249385218057 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9429867552335107,
            "unit": "iter/sec",
            "range": "stddev: 0.0018222273736373865",
            "extra": "mean: 1.060460281600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.88941852424751,
            "unit": "iter/sec",
            "range": "stddev: 0.00007293183060027417",
            "extra": "mean: 18.556518652173818 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.02772266587675,
            "unit": "iter/sec",
            "range": "stddev: 0.021594176220485272",
            "extra": "mean: 12.191000402062807 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.8191308974104,
            "unit": "iter/sec",
            "range": "stddev: 0.0008084930312274456",
            "extra": "mean: 10.018119683167296 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.48685568370884,
            "unit": "iter/sec",
            "range": "stddev: 0.00010601451267671711",
            "extra": "mean: 9.95155031169039 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.09237222942681,
            "unit": "iter/sec",
            "range": "stddev: 0.0002090391535924458",
            "extra": "mean: 5.2884206179755076 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.77092537234617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000538430128989313",
            "extra": "mean: 5.721775506249216 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145189.45192375706,
            "unit": "iter/sec",
            "range": "stddev: 3.142272968762055e-7",
            "extra": "mean: 6.887552688917975 usec\nrounds: 43102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12510.652836081867,
            "unit": "iter/sec",
            "range": "stddev: 0.000011382614057692715",
            "extra": "mean: 79.93187990285436 usec\nrounds: 5354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 287.1811426624847,
            "unit": "iter/sec",
            "range": "stddev: 0.00022818723630605505",
            "extra": "mean: 3.48212278399933 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2145.5539406313146,
            "unit": "iter/sec",
            "range": "stddev: 0.00008718294624942156",
            "extra": "mean: 466.08010223493 usec\nrounds: 1790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2164.9240443032936,
            "unit": "iter/sec",
            "range": "stddev: 0.00009113847295253718",
            "extra": "mean: 461.90996983536934 usec\nrounds: 1757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.7290451886358,
            "unit": "iter/sec",
            "range": "stddev: 0.02083316529890799",
            "extra": "mean: 11.943286797873649 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17191193566994045,
            "unit": "iter/sec",
            "range": "stddev: 0.09220812276982018",
            "extra": "mean: 5.816931768600023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.6815840464506,
            "unit": "iter/sec",
            "range": "stddev: 0.00002423639764445014",
            "extra": "mean: 862.3056654144 usec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.11155808819782,
            "unit": "iter/sec",
            "range": "stddev: 0.0002146485934518732",
            "extra": "mean: 20.361805630441072 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2191.398672874565,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816750905724998",
            "extra": "mean: 456.32956356966804 usec\nrounds: 1345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 985563.9461986249,
            "unit": "iter/sec",
            "range": "stddev: 1.0927999284034064e-7",
            "extra": "mean: 1.0146475059858426 usec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.15975438255043,
            "unit": "iter/sec",
            "range": "stddev: 0.0006380049830753487",
            "extra": "mean: 23.719303270274544 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.27032957927779,
            "unit": "iter/sec",
            "range": "stddev: 0.003969599495620966",
            "extra": "mean: 6.050692840908958 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.60667195368929,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485000483920656",
            "extra": "mean: 9.745954926316507 msec\nrounds: 95"
          }
        ]
      }
    ]
  }
}