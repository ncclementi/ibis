window.BENCHMARK_DATA = {
  "lastUpdate": 1675867393809,
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
          "id": "74de349c4285e85bc5d3257ef481d5d7255ea477",
          "message": "feat(api): add array to string join operation",
          "timestamp": "2023-02-08T15:38:20+01:00",
          "tree_id": "93d2841765e72558abbd050502d06a68a4c6eca2",
          "url": "https://github.com/ibis-project/ibis/commit/74de349c4285e85bc5d3257ef481d5d7255ea477"
        },
        "date": 1675867311095,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 590159.1432105877,
            "unit": "iter/sec",
            "range": "stddev: 5.328346652110616e-7",
            "extra": "mean: 1.694458200816467 usec\nrounds: 16340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 382349.90594974434,
            "unit": "iter/sec",
            "range": "stddev: 3.787673052708752e-7",
            "extra": "mean: 2.615405377218633 usec\nrounds: 1897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 608.6357346318088,
            "unit": "iter/sec",
            "range": "stddev: 0.00007529204834526452",
            "extra": "mean: 1.6430188750007346 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1482046.528503495,
            "unit": "iter/sec",
            "range": "stddev: 1.0325337444446548e-7",
            "extra": "mean: 674.7426486061512 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.759371430081616,
            "unit": "iter/sec",
            "range": "stddev: 0.0013337486439810554",
            "extra": "mean: 210.11177940000607 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5197081.036158082,
            "unit": "iter/sec",
            "range": "stddev: 6.214882084992658e-9",
            "extra": "mean: 192.4157027843728 nsec\nrounds: 52911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.64943825941653,
            "unit": "iter/sec",
            "range": "stddev: 0.000393345315997178",
            "extra": "mean: 15.468038499999569 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.69806736858067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008121380449597485",
            "extra": "mean: 6.959035833342379 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1504813.4803533165,
            "unit": "iter/sec",
            "range": "stddev: 1.0619587246920067e-7",
            "extra": "mean: 664.5341851703835 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.87038043358642,
            "unit": "iter/sec",
            "range": "stddev: 0.0006488147353457206",
            "extra": "mean: 22.794422799999634 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.23571777250929,
            "unit": "iter/sec",
            "range": "stddev: 0.00030584552496051707",
            "extra": "mean: 10.077016848836905 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6091.784986246011,
            "unit": "iter/sec",
            "range": "stddev: 0.000044572084305592075",
            "extra": "mean: 164.1554983076049 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 991.0699560376125,
            "unit": "iter/sec",
            "range": "stddev: 0.00001543487233988818",
            "extra": "mean: 1.0090105081967073 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5828250720842554,
            "unit": "iter/sec",
            "range": "stddev: 0.0020373277472353958",
            "extra": "mean: 631.7817537999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.96958168477819,
            "unit": "iter/sec",
            "range": "stddev: 0.0005841222104572896",
            "extra": "mean: 10.641741530301891 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.87353662254482,
            "unit": "iter/sec",
            "range": "stddev: 0.01640941819067874",
            "extra": "mean: 29.521570515150803 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10811.339983460428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016627784973528604",
            "extra": "mean: 92.4954724881315 usec\nrounds: 5325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8641585306429042,
            "unit": "iter/sec",
            "range": "stddev: 0.003888064738250171",
            "extra": "mean: 1.1571950800000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5885075958206338,
            "unit": "iter/sec",
            "range": "stddev: 0.0023328817066350692",
            "extra": "mean: 1.6992134122000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.17747498839188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000222785708831724",
            "extra": "mean: 5.774423030864898 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1552715345077518,
            "unit": "iter/sec",
            "range": "stddev: 0.06382893858075701",
            "extra": "mean: 6.440330503400003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 518.4355759176234,
            "unit": "iter/sec",
            "range": "stddev: 0.000026997385458399763",
            "extra": "mean: 1.9288799736206654 msec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.49032770119814,
            "unit": "iter/sec",
            "range": "stddev: 0.00017671090929282285",
            "extra": "mean: 4.175533974999013 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9748.960547950883,
            "unit": "iter/sec",
            "range": "stddev: 0.000012310304810155735",
            "extra": "mean: 102.5750381367774 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.37664288156273,
            "unit": "iter/sec",
            "range": "stddev: 0.0001898482032222731",
            "extra": "mean: 3.978094338984209 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.75717573367436,
            "unit": "iter/sec",
            "range": "stddev: 0.0006293424332230786",
            "extra": "mean: 6.908120408758247 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6128.013683413367,
            "unit": "iter/sec",
            "range": "stddev: 0.000045857931563819355",
            "extra": "mean: 163.1850142088765 usec\nrounds: 2041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5212.110656647408,
            "unit": "iter/sec",
            "range": "stddev: 0.00004824325533806342",
            "extra": "mean: 191.86085366868076 usec\nrounds: 2344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.33253820204872,
            "unit": "iter/sec",
            "range": "stddev: 0.0005372089618394219",
            "extra": "mean: 12.000114499997494 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.254521210522901,
            "unit": "iter/sec",
            "range": "stddev: 0.0031275460299736084",
            "extra": "mean: 443.55315680000444 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.95466583077362,
            "unit": "iter/sec",
            "range": "stddev: 0.0006538928287186688",
            "extra": "mean: 10.994488197675944 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1463.6637942094274,
            "unit": "iter/sec",
            "range": "stddev: 0.000007836657859183016",
            "extra": "mean: 683.217009231367 usec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.95692163245823,
            "unit": "iter/sec",
            "range": "stddev: 0.0001379240005350464",
            "extra": "mean: 9.712800112360195 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19234.40197627666,
            "unit": "iter/sec",
            "range": "stddev: 0.000013656531973959842",
            "extra": "mean: 51.99017891137872 usec\nrounds: 7881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.6363920105961,
            "unit": "iter/sec",
            "range": "stddev: 0.0006251259699330013",
            "extra": "mean: 6.225239421052464 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 417.52602173388306,
            "unit": "iter/sec",
            "range": "stddev: 0.00010125098487602634",
            "extra": "mean: 2.3950603027022015 msec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.28408564606772,
            "unit": "iter/sec",
            "range": "stddev: 0.0006403761614772224",
            "extra": "mean: 6.162033670885897 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1962093.213018778,
            "unit": "iter/sec",
            "range": "stddev: 3.001828647356628e-8",
            "extra": "mean: 509.6597824020971 nsec\nrounds: 73530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5197.568231119434,
            "unit": "iter/sec",
            "range": "stddev: 0.00004467315300999479",
            "extra": "mean: 192.39766666509416 usec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.00391763335992,
            "unit": "iter/sec",
            "range": "stddev: 0.009578212080740785",
            "extra": "mean: 7.092001532895078 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.63970081952417,
            "unit": "iter/sec",
            "range": "stddev: 0.000294055676767674",
            "extra": "mean: 11.410353876712714 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.9750070289312,
            "unit": "iter/sec",
            "range": "stddev: 0.0002141237288627678",
            "extra": "mean: 3.9373953039642458 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1563780.2989849402,
            "unit": "iter/sec",
            "range": "stddev: 1.2723304325340662e-7",
            "extra": "mean: 639.4760188813649 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58110.46307166327,
            "unit": "iter/sec",
            "range": "stddev: 6.271701110734241e-7",
            "extra": "mean: 17.208604907635568 usec\nrounds: 12063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7504493088976512,
            "unit": "iter/sec",
            "range": "stddev: 0.0027404302230314604",
            "extra": "mean: 1.3325350402000082 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.08459085121187,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893245056070952",
            "extra": "mean: 28.502541307688034 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11505268.51303451,
            "unit": "iter/sec",
            "range": "stddev: 3.5411620120761033e-9",
            "extra": "mean: 86.91670245396342 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.78319748313226,
            "unit": "iter/sec",
            "range": "stddev: 0.0007147915462599067",
            "extra": "mean: 11.39170169999962 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5242.418837646946,
            "unit": "iter/sec",
            "range": "stddev: 0.000054790557650759434",
            "extra": "mean: 190.75164174574974 usec\nrounds: 3344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.183010427923602,
            "unit": "iter/sec",
            "range": "stddev: 0.00019685304726696062",
            "extra": "mean: 108.89675100000001 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.38413651527957,
            "unit": "iter/sec",
            "range": "stddev: 0.00019856274712732136",
            "extra": "mean: 23.04989980952617 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10356.11078863293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016172647136394982",
            "extra": "mean: 96.561346282392 usec\nrounds: 5097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.53401479567655,
            "unit": "iter/sec",
            "range": "stddev: 0.0006384846258359417",
            "extra": "mean: 10.578203011491416 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6089.622172973851,
            "unit": "iter/sec",
            "range": "stddev: 0.000055015943934683375",
            "extra": "mean: 164.2138003960355 usec\nrounds: 3537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 148.36139820024596,
            "unit": "iter/sec",
            "range": "stddev: 0.0007205925790399636",
            "extra": "mean: 6.740297760272403 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4604.515189207228,
            "unit": "iter/sec",
            "range": "stddev: 0.000018676194615920434",
            "extra": "mean: 217.1781303586432 usec\nrounds: 2286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.3832189271272,
            "unit": "iter/sec",
            "range": "stddev: 0.0004193433325016801",
            "extra": "mean: 4.517054205130022 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.27641144634836,
            "unit": "iter/sec",
            "range": "stddev: 0.0006702355546686782",
            "extra": "mean: 11.201167069769163 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.42786561453292,
            "unit": "iter/sec",
            "range": "stddev: 0.00011266778857877469",
            "extra": "mean: 14.613929442621938 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 251.13913231111562,
            "unit": "iter/sec",
            "range": "stddev: 0.0001038081010431696",
            "extra": "mean: 3.981856554163698 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.5520276210689,
            "unit": "iter/sec",
            "range": "stddev: 0.00022597264467562003",
            "extra": "mean: 3.9911870181006273 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.95242429757586,
            "unit": "iter/sec",
            "range": "stddev: 0.0001413819863508676",
            "extra": "mean: 10.531589976745122 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4408837.587699891,
            "unit": "iter/sec",
            "range": "stddev: 1.2076688230281727e-8",
            "extra": "mean: 226.8171553406941 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.857234653650387,
            "unit": "iter/sec",
            "range": "stddev: 0.0031076387423268443",
            "extra": "mean: 1.1665417348000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 279.02864403982016,
            "unit": "iter/sec",
            "range": "stddev: 0.00003804641701853687",
            "extra": "mean: 3.5838614470609333 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5992.254951517714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004393623024329174",
            "extra": "mean: 166.882084973157 usec\nrounds: 2236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.03113990332747,
            "unit": "iter/sec",
            "range": "stddev: 0.00020715738963061103",
            "extra": "mean: 4.015562071426869 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.67060697731515,
            "unit": "iter/sec",
            "range": "stddev: 0.00010790774919940446",
            "extra": "mean: 13.760721722224776 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.736693196615951,
            "unit": "iter/sec",
            "range": "stddev: 0.000325277523047974",
            "extra": "mean: 72.7977240000054 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121041.62709267266,
            "unit": "iter/sec",
            "range": "stddev: 4.5105510954446114e-7",
            "extra": "mean: 8.26162060126946 usec\nrounds: 37454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.6417270285511,
            "unit": "iter/sec",
            "range": "stddev: 0.00022928175117257953",
            "extra": "mean: 4.0380916899546095 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.02184800572803,
            "unit": "iter/sec",
            "range": "stddev: 0.00003448476625675427",
            "extra": "mean: 3.0209486353380997 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.98732767677359,
            "unit": "iter/sec",
            "range": "stddev: 0.00015428860360513488",
            "extra": "mean: 40.02028599999221 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.23894783875079,
            "unit": "iter/sec",
            "range": "stddev: 0.00009915543814747705",
            "extra": "mean: 8.114317896550263 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.7231025208074,
            "unit": "iter/sec",
            "range": "stddev: 0.00010549634748139187",
            "extra": "mean: 6.957823637680142 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.7771048917475,
            "unit": "iter/sec",
            "range": "stddev: 0.010077700130357923",
            "extra": "mean: 7.003924058820161 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.50765863048537,
            "unit": "iter/sec",
            "range": "stddev: 0.000015200932958751783",
            "extra": "mean: 3.7663696978011805 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.20047476119554,
            "unit": "iter/sec",
            "range": "stddev: 0.000705102995588535",
            "extra": "mean: 10.845931136364067 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 158.9436915692226,
            "unit": "iter/sec",
            "range": "stddev: 0.000724661410309292",
            "extra": "mean: 6.291536267511966 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4581952.759297644,
            "unit": "iter/sec",
            "range": "stddev: 1.3192422411061882e-8",
            "extra": "mean: 218.24755787166913 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.6480217765324,
            "unit": "iter/sec",
            "range": "stddev: 0.00022328768355328436",
            "extra": "mean: 7.010261954887578 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.660899390966506,
            "unit": "iter/sec",
            "range": "stddev: 0.00025645312656408573",
            "extra": "mean: 17.34277492308186 msec\nrounds: 52"
          }
        ]
      }
    ]
  }
}