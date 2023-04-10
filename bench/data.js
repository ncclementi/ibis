window.BENCHMARK_DATA = {
  "lastUpdate": 1681145090624,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "011cc1939eef94e45d688e1ae3dc45a8c3649863",
          "message": "docs(comparison): add a \"why ibis\" page\n\nCo-authored-by: Phillip Cloud <417981+cpcloud@users.noreply.github.com>",
          "timestamp": "2023-04-10T11:38:51-05:00",
          "tree_id": "4f5e681b0c802431a2ee4255cdb8e02fac8154cd",
          "url": "https://github.com/ibis-project/ibis/commit/011cc1939eef94e45d688e1ae3dc45a8c3649863"
        },
        "date": 1681144995270,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.99824457612917,
            "unit": "iter/sec",
            "range": "stddev: 0.00007960128954994683",
            "extra": "mean: 7.1429467064225465 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1754.0091094016823,
            "unit": "iter/sec",
            "range": "stddev: 0.00013516724393906933",
            "extra": "mean: 570.1224666621682 usec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 246.72375782611257,
            "unit": "iter/sec",
            "range": "stddev: 0.00031001627400428035",
            "extra": "mean: 4.053115957745691 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.95858748007048,
            "unit": "iter/sec",
            "range": "stddev: 0.00014627335914034646",
            "extra": "mean: 12.054207169815115 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.758276885885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853223023760667",
            "extra": "mean: 12.23117754054138 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.85319047547657,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670172923071065",
            "extra": "mean: 4.239925684210651 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.26945958379408,
            "unit": "iter/sec",
            "range": "stddev: 0.021332327650884546",
            "extra": "mean: 30.989053206896784 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11013.71043535928,
            "unit": "iter/sec",
            "range": "stddev: 0.000027174565119825448",
            "extra": "mean: 90.79592257932636 usec\nrounds: 4327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1652524.6440805458,
            "unit": "iter/sec",
            "range": "stddev: 1.0449558117367094e-7",
            "extra": "mean: 605.1346971326976 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.70439474588125,
            "unit": "iter/sec",
            "range": "stddev: 0.00035595482626899605",
            "extra": "mean: 4.470184866667272 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 227.17469773484922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005276352057685725",
            "extra": "mean: 4.401898670806935 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1722.332735332474,
            "unit": "iter/sec",
            "range": "stddev: 0.00018912980790186104",
            "extra": "mean: 580.607904318188 usec\nrounds: 1181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 79.27083180746945,
            "unit": "iter/sec",
            "range": "stddev: 0.001387274595025958",
            "extra": "mean: 12.614980531915815 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 235.17712581330224,
            "unit": "iter/sec",
            "range": "stddev: 0.0003415742936839446",
            "extra": "mean: 4.252114216217866 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1882.1559689073058,
            "unit": "iter/sec",
            "range": "stddev: 0.0001029808608656127",
            "extra": "mean: 531.3055966241493 usec\nrounds: 1185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1612787.6034465325,
            "unit": "iter/sec",
            "range": "stddev: 2.128606271137699e-7",
            "extra": "mean: 620.0444484214763 nsec\nrounds: 161265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.4623677600781,
            "unit": "iter/sec",
            "range": "stddev: 0.0003843891520835877",
            "extra": "mean: 4.176021515839679 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.91686965348957,
            "unit": "iter/sec",
            "range": "stddev: 0.0010580115833704266",
            "extra": "mean: 12.358362406779966 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11926.557196953929,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022476625862938354",
            "extra": "mean: 83.84649345876632 usec\nrounds: 6039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.61765682026392,
            "unit": "iter/sec",
            "range": "stddev: 0.0010965133795071687",
            "extra": "mean: 11.959196634145096 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1816.8971618246787,
            "unit": "iter/sec",
            "range": "stddev: 0.0001267080807951415",
            "extra": "mean: 550.3888833178192 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.30364342719075,
            "unit": "iter/sec",
            "range": "stddev: 0.00010723413454808355",
            "extra": "mean: 15.796879071425945 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1776.19430713433,
            "unit": "iter/sec",
            "range": "stddev: 0.00011039447260298035",
            "extra": "mean: 563.0014666657594 usec\nrounds: 1125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.90383534766794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000710408181417644",
            "extra": "mean: 10.427111662164787 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.06581224483521,
            "unit": "iter/sec",
            "range": "stddev: 0.0008483627151661286",
            "extra": "mean: 13.321643636365279 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.53149512587756,
            "unit": "iter/sec",
            "range": "stddev: 0.00024029775916135172",
            "extra": "mean: 22.971873516137148 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 238.8999273176731,
            "unit": "iter/sec",
            "range": "stddev: 0.0003222149887111218",
            "extra": "mean: 4.185853094338815 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10026589.568438983,
            "unit": "iter/sec",
            "range": "stddev: 4.6408456732828186e-9",
            "extra": "mean: 99.73480944587052 nsec\nrounds: 99001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.94840571129546,
            "unit": "iter/sec",
            "range": "stddev: 0.0010872424609134972",
            "extra": "mean: 12.508066810126717 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3791.6114819430904,
            "unit": "iter/sec",
            "range": "stddev: 0.00005989582175872561",
            "extra": "mean: 263.740102265839 usec\nrounds: 1809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.1847844890373,
            "unit": "iter/sec",
            "range": "stddev: 0.0010476216673323095",
            "extra": "mean: 11.878631109760956 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1455789.4038365234,
            "unit": "iter/sec",
            "range": "stddev: 1.0468015978119284e-7",
            "extra": "mean: 686.912541995871 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.88449390396148,
            "unit": "iter/sec",
            "range": "stddev: 0.0011170235835944178",
            "extra": "mean: 11.921154357143646 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 570.0207756071483,
            "unit": "iter/sec",
            "range": "stddev: 0.00010986342118093404",
            "extra": "mean: 1.7543220226225376 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.25049138247675,
            "unit": "iter/sec",
            "range": "stddev: 0.00018813971536980984",
            "extra": "mean: 7.448762307700026 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 136.47971349727587,
            "unit": "iter/sec",
            "range": "stddev: 0.004454215254062199",
            "extra": "mean: 7.3270962722233435 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.50543449981188,
            "unit": "iter/sec",
            "range": "stddev: 0.0009432743129177534",
            "extra": "mean: 12.269120533334595 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.46215194758247,
            "unit": "iter/sec",
            "range": "stddev: 0.00020748371753079",
            "extra": "mean: 12.428203519232941 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 627490.3494394572,
            "unit": "iter/sec",
            "range": "stddev: 3.3767040538092715e-7",
            "extra": "mean: 1.593650007355984 usec\nrounds: 20449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 251.3190339545165,
            "unit": "iter/sec",
            "range": "stddev: 0.00004425318486093811",
            "extra": "mean: 3.9790062227478527 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5860697492945613,
            "unit": "iter/sec",
            "range": "stddev: 0.011168760241446493",
            "extra": "mean: 1.706281549599987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 80.81019797122065,
            "unit": "iter/sec",
            "range": "stddev: 0.0009579460057728654",
            "extra": "mean: 12.374675784807943 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2256433.8034961247,
            "unit": "iter/sec",
            "range": "stddev: 3.360274723715282e-7",
            "extra": "mean: 443.1771933440087 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.67185920298856,
            "unit": "iter/sec",
            "range": "stddev: 0.0010259165876039197",
            "extra": "mean: 12.395896287499397 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.3937850245632,
            "unit": "iter/sec",
            "range": "stddev: 0.0005666984361200314",
            "extra": "mean: 19.457605613637117 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 407396.58313292457,
            "unit": "iter/sec",
            "range": "stddev: 4.912177653120156e-7",
            "extra": "mean: 2.454610670295489 usec\nrounds: 1893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7425864061393443,
            "unit": "iter/sec",
            "range": "stddev: 0.01980293443748123",
            "extra": "mean: 1.3466446352000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1838.7088786383272,
            "unit": "iter/sec",
            "range": "stddev: 0.00010493612245589883",
            "extra": "mean: 543.8598853890122 usec\nrounds: 1143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.76086771731458,
            "unit": "iter/sec",
            "range": "stddev: 0.00019958623467599933",
            "extra": "mean: 11.797897153850446 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.836140710113584,
            "unit": "iter/sec",
            "range": "stddev: 0.00013524028280513517",
            "extra": "mean: 206.7764484000122 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5011389.868947809,
            "unit": "iter/sec",
            "range": "stddev: 1.4757242415805556e-8",
            "extra": "mean: 199.54544071626265 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.89435863821029,
            "unit": "iter/sec",
            "range": "stddev: 0.0010267433164997725",
            "extra": "mean: 12.063547102939383 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4553948.232864169,
            "unit": "iter/sec",
            "range": "stddev: 1.607635622339156e-8",
            "extra": "mean: 219.58967227255445 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1517.2511659262577,
            "unit": "iter/sec",
            "range": "stddev: 0.000007669089341230012",
            "extra": "mean: 659.0866578042903 usec\nrounds: 1166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6783547343875422,
            "unit": "iter/sec",
            "range": "stddev: 0.00250877606682535",
            "extra": "mean: 1.4741549654000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.5426906198407,
            "unit": "iter/sec",
            "range": "stddev: 0.0010006589109424551",
            "extra": "mean: 11.96992809999955 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14388127908870696,
            "unit": "iter/sec",
            "range": "stddev: 0.11980244708173991",
            "extra": "mean: 6.950174521200017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5854867.442930667,
            "unit": "iter/sec",
            "range": "stddev: 9.036194321996873e-9",
            "extra": "mean: 170.79805986171206 nsec\nrounds: 50249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.290586175474166,
            "unit": "iter/sec",
            "range": "stddev: 0.0001308401514753634",
            "extra": "mean: 75.24122614285845 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.58410750674992,
            "unit": "iter/sec",
            "range": "stddev: 0.00007705899613316703",
            "extra": "mean: 7.321496023617393 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.14987958479531,
            "unit": "iter/sec",
            "range": "stddev: 0.00041318906550243204",
            "extra": "mean: 4.252606898058814 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 451.0116826594056,
            "unit": "iter/sec",
            "range": "stddev: 0.00008609951295749753",
            "extra": "mean: 2.2172374651216713 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1831.4124347142501,
            "unit": "iter/sec",
            "range": "stddev: 0.00009808311406390219",
            "extra": "mean: 546.0266519136237 usec\nrounds: 994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7529391405515021,
            "unit": "iter/sec",
            "range": "stddev: 0.009419276167715415",
            "extra": "mean: 1.328128591199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.022174954221757,
            "unit": "iter/sec",
            "range": "stddev: 0.0004806004068318328",
            "extra": "mean: 110.83801911113117 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.64437943719265,
            "unit": "iter/sec",
            "range": "stddev: 0.0001364849126170223",
            "extra": "mean: 10.45539744085721 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 994.0562293031618,
            "unit": "iter/sec",
            "range": "stddev: 0.00002594622442459965",
            "extra": "mean: 1.005979310346463 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1431589556664092,
            "unit": "iter/sec",
            "range": "stddev: 0.003565411663316464",
            "extra": "mean: 466.6009477999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1835.8480249106065,
            "unit": "iter/sec",
            "range": "stddev: 0.00010418412630592208",
            "extra": "mean: 544.7073975792159 usec\nrounds: 1074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4228335696676417,
            "unit": "iter/sec",
            "range": "stddev: 0.002088804174958142",
            "extra": "mean: 702.8228890000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 164.79364352567646,
            "unit": "iter/sec",
            "range": "stddev: 0.01275183223652304",
            "extra": "mean: 6.068195220431487 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7270.167729051547,
            "unit": "iter/sec",
            "range": "stddev: 0.000016844924111047687",
            "extra": "mean: 137.5484084093419 usec\nrounds: 2735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.13005529259243,
            "unit": "iter/sec",
            "range": "stddev: 0.0009525642825515918",
            "extra": "mean: 12.175810626663406 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59278.67593256969,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010128263470732176",
            "extra": "mean: 16.86947260997384 usec\nrounds: 3870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.29816226725973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005150336874966898",
            "extra": "mean: 8.598588150532796 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.188946767683266,
            "unit": "iter/sec",
            "range": "stddev: 0.03801789064765327",
            "extra": "mean: 33.12470645946755 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142339.9352045093,
            "unit": "iter/sec",
            "range": "stddev: 7.257962943021295e-7",
            "extra": "mean: 7.025435262164713 usec\nrounds: 35211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.243183640132635,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131342650286551",
            "extra": "mean: 29.20289218751293 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.339282275409662,
            "unit": "iter/sec",
            "range": "stddev: 0.000591846156162153",
            "extra": "mean: 46.861932238102995 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.32646373457166,
            "unit": "iter/sec",
            "range": "stddev: 0.00008722035891714074",
            "extra": "mean: 9.869090098905811 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 640.1583209032461,
            "unit": "iter/sec",
            "range": "stddev: 0.00002212860591003821",
            "extra": "mean: 1.562113569950988 msec\nrounds: 579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.71158676234773,
            "unit": "iter/sec",
            "range": "stddev: 0.0018205840831542381",
            "extra": "mean: 26.517049157910986 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.98581384446899,
            "unit": "iter/sec",
            "range": "stddev: 0.0008765360724352703",
            "extra": "mean: 11.629825378041991 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.31528555748892,
            "unit": "iter/sec",
            "range": "stddev: 0.0004245570674981934",
            "extra": "mean: 20.69738362221061 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.12418980356458,
            "unit": "iter/sec",
            "range": "stddev: 0.000998510544040634",
            "extra": "mean: 11.747542059520725 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.76347171090677,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337868630511757",
            "extra": "mean: 4.102337372294886 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10381.23607149561,
            "unit": "iter/sec",
            "range": "stddev: 0.000021272243696355077",
            "extra": "mean: 96.32764278868108 usec\nrounds: 5179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.4492544322678,
            "unit": "iter/sec",
            "range": "stddev: 0.00009374146976473037",
            "extra": "mean: 5.971958510000377 msec\nrounds: 100"
          }
        ]
      }
    ]
  }
}