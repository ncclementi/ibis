window.BENCHMARK_DATA = {
  "lastUpdate": 1679498651489,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9bcdf77ddafce75f0e5d8714d01dde81ed0b90f2",
          "message": "feat(sqlite): implement `ops.Arbitrary`",
          "timestamp": "2023-03-22T11:16:00-04:00",
          "tree_id": "d956195678050fd9822976432409d65b123af923",
          "url": "https://github.com/ibis-project/ibis/commit/9bcdf77ddafce75f0e5d8714d01dde81ed0b90f2"
        },
        "date": 1679498554953,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 165.68832869665647,
            "unit": "iter/sec",
            "range": "stddev: 0.005450428473741785",
            "extra": "mean: 6.0354281310351565 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4596900541140962,
            "unit": "iter/sec",
            "range": "stddev: 0.0045196410350801285",
            "extra": "mean: 685.0769430000071 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 93.00404897437137,
            "unit": "iter/sec",
            "range": "stddev: 0.0006363432425628971",
            "extra": "mean: 10.752220048780506 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 561.3298441340809,
            "unit": "iter/sec",
            "range": "stddev: 0.0003826436268988358",
            "extra": "mean: 1.7814837576338398 msec\nrounds: 524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 880.9371994135928,
            "unit": "iter/sec",
            "range": "stddev: 0.00019386803347027804",
            "extra": "mean: 1.1351546973673752 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.30127033161148,
            "unit": "iter/sec",
            "range": "stddev: 0.0016534948564990984",
            "extra": "mean: 22.074436162161977 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4748.038572881332,
            "unit": "iter/sec",
            "range": "stddev: 0.00006223545096807914",
            "extra": "mean: 210.61328475963776 usec\nrounds: 748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.54011729607281,
            "unit": "iter/sec",
            "range": "stddev: 0.0007626740025306751",
            "extra": "mean: 11.044827750000884 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2269907.8981191567,
            "unit": "iter/sec",
            "range": "stddev: 2.3020295968278062e-8",
            "extra": "mean: 440.5465088821941 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.47648762006546,
            "unit": "iter/sec",
            "range": "stddev: 0.014252304648000765",
            "extra": "mean: 11.979421134144934 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.4792662438429,
            "unit": "iter/sec",
            "range": "stddev: 0.0010549878451818547",
            "extra": "mean: 48.829874473683866 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5094678.186358895,
            "unit": "iter/sec",
            "range": "stddev: 2.890786027763071e-8",
            "extra": "mean: 196.28325154648235 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 410.97506564363545,
            "unit": "iter/sec",
            "range": "stddev: 0.00015365904926646358",
            "extra": "mean: 2.4332376428576805 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2223976.185961817,
            "unit": "iter/sec",
            "range": "stddev: 2.3517576345209645e-7",
            "extra": "mean: 449.6451024577807 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4712.327842328394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008688440642213624",
            "extra": "mean: 212.20934397168196 usec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4548.637725715714,
            "unit": "iter/sec",
            "range": "stddev: 0.00005772541456889439",
            "extra": "mean: 219.84604189216964 usec\nrounds: 2769"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 229.48128168337036,
            "unit": "iter/sec",
            "range": "stddev: 0.007973237851739576",
            "extra": "mean: 4.357653890829154 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.48218428839657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889605064239681",
            "extra": "mean: 9.952012957141473 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 409835.12460131984,
            "unit": "iter/sec",
            "range": "stddev: 3.657440741466721e-7",
            "extra": "mean: 2.440005602186445 usec\nrounds: 1785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1614547.0026966794,
            "unit": "iter/sec",
            "range": "stddev: 2.3496220647221273e-7",
            "extra": "mean: 619.3687754706186 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11981.371836268025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022998044391456677",
            "extra": "mean: 83.46289670878635 usec\nrounds: 5712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.16861574327908,
            "unit": "iter/sec",
            "range": "stddev: 0.0042793060736557136",
            "extra": "mean: 7.290297380208107 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.68602426542884,
            "unit": "iter/sec",
            "range": "stddev: 0.018684432988455523",
            "extra": "mean: 13.571094518518738 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4644046.913421289,
            "unit": "iter/sec",
            "range": "stddev: 1.6462131793758602e-8",
            "extra": "mean: 215.32943543503978 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1485.0749013644834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001634303133796559",
            "extra": "mean: 673.3667097068318 usec\nrounds: 1092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.57988918140872,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613844660316785",
            "extra": "mean: 13.058258645832174 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5615715.033802319,
            "unit": "iter/sec",
            "range": "stddev: 1.4670321680088854e-8",
            "extra": "mean: 178.07171374965236 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 571.5043621242521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000706966409276613",
            "extra": "mean: 1.7497679217758757 msec\nrounds: 473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 100.52244380001123,
            "unit": "iter/sec",
            "range": "stddev: 0.0007574220733206155",
            "extra": "mean: 9.948027148936944 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4396.222468565434,
            "unit": "iter/sec",
            "range": "stddev: 0.00003272438435270105",
            "extra": "mean: 227.4680153587218 usec\nrounds: 1172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.52747092245498,
            "unit": "iter/sec",
            "range": "stddev: 0.0007761535310069239",
            "extra": "mean: 9.947529673469864 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4379.445060260058,
            "unit": "iter/sec",
            "range": "stddev: 0.00006137843694994425",
            "extra": "mean: 228.33943256285957 usec\nrounds: 2076"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142187.44743845973,
            "unit": "iter/sec",
            "range": "stddev: 6.589751605331939e-7",
            "extra": "mean: 7.032969632799764 usec\nrounds: 31646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5827373239143473,
            "unit": "iter/sec",
            "range": "stddev: 0.005315010032308477",
            "extra": "mean: 1.7160390436 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.890804165679663,
            "unit": "iter/sec",
            "range": "stddev: 0.00039454841084525483",
            "extra": "mean: 112.47576499999923 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.21292374211816,
            "unit": "iter/sec",
            "range": "stddev: 0.0007952819179067786",
            "extra": "mean: 9.97875286598103 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 257.18483319495647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966796788401636",
            "extra": "mean: 3.888254169490468 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.34903270333119,
            "unit": "iter/sec",
            "range": "stddev: 0.0006242261350577203",
            "extra": "mean: 32.94997932142455 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.3705065601533,
            "unit": "iter/sec",
            "range": "stddev: 0.00011959836446021655",
            "extra": "mean: 9.963086112359983 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4423.695100357842,
            "unit": "iter/sec",
            "range": "stddev: 0.00006264926762274906",
            "extra": "mean: 226.0553626128319 usec\nrounds: 1776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 270.0650753249812,
            "unit": "iter/sec",
            "range": "stddev: 0.00024521140392635776",
            "extra": "mean: 3.7028112531642825 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4575.082415529448,
            "unit": "iter/sec",
            "range": "stddev: 0.00006702191656681849",
            "extra": "mean: 218.57529748658658 usec\nrounds: 1711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.771242892915875,
            "unit": "iter/sec",
            "range": "stddev: 0.03341372898306728",
            "extra": "mean: 32.4978748333308 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.79585358675942,
            "unit": "iter/sec",
            "range": "stddev: 0.0007145382372053669",
            "extra": "mean: 11.390059543208437 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.712755650995545,
            "unit": "iter/sec",
            "range": "stddev: 0.003177597161065343",
            "extra": "mean: 1.4030053618000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14082246411303453,
            "unit": "iter/sec",
            "range": "stddev: 0.09550212653406936",
            "extra": "mean: 7.101139767000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.067499160616826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241799174596852",
            "extra": "mean: 22.1889392272707 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 243.45829596992266,
            "unit": "iter/sec",
            "range": "stddev: 0.00004554104436000313",
            "extra": "mean: 4.107479665114973 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.346364484319324,
            "unit": "iter/sec",
            "range": "stddev: 0.0009587282730150461",
            "extra": "mean: 31.901626119999943 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11219.760999267486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023818932361117504",
            "extra": "mean: 89.12845826798697 usec\nrounds: 4469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.33215426148513,
            "unit": "iter/sec",
            "range": "stddev: 0.00011846234543546973",
            "extra": "mean: 7.228977278194699 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.84260310166453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002752497782804657",
            "extra": "mean: 18.92412450000027 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 248.55203026877822,
            "unit": "iter/sec",
            "range": "stddev: 0.00004379152421187552",
            "extra": "mean: 4.023302480847265 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.97529845856808,
            "unit": "iter/sec",
            "range": "stddev: 0.00009702380823602639",
            "extra": "mean: 15.631032978261503 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1443234.9106560952,
            "unit": "iter/sec",
            "range": "stddev: 1.20031929929847e-7",
            "extra": "mean: 692.8878955300488 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60939.54056863651,
            "unit": "iter/sec",
            "range": "stddev: 6.244628427727765e-7",
            "extra": "mean: 16.409706910633744 usec\nrounds: 11099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 297.89640185008443,
            "unit": "iter/sec",
            "range": "stddev: 0.00003267727626006561",
            "extra": "mean: 3.356871696970839 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 264.1311232766952,
            "unit": "iter/sec",
            "range": "stddev: 0.00026672311663476404",
            "extra": "mean: 3.785998361701709 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.74385999653413,
            "unit": "iter/sec",
            "range": "stddev: 0.0008603745560737215",
            "extra": "mean: 11.662642666663492 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.92052900188823,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111460382271757",
            "extra": "mean: 11.373907906974985 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9797736.70331327,
            "unit": "iter/sec",
            "range": "stddev: 6.678724104771447e-9",
            "extra": "mean: 102.06438795823023 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.83961132482813,
            "unit": "iter/sec",
            "range": "stddev: 0.00005410333028978186",
            "extra": "mean: 7.9466233999937685 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 258.8388114870071,
            "unit": "iter/sec",
            "range": "stddev: 0.0002635801106493827",
            "extra": "mean: 3.8634082510852394 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.3176132408799,
            "unit": "iter/sec",
            "range": "stddev: 0.0008535760458789032",
            "extra": "mean: 9.968339234694785 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.66620101123387,
            "unit": "iter/sec",
            "range": "stddev: 0.022678156977164673",
            "extra": "mean: 14.354162929578251 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.18359367327463,
            "unit": "iter/sec",
            "range": "stddev: 0.00013555314054172068",
            "extra": "mean: 7.343028429688481 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10351.454406529494,
            "unit": "iter/sec",
            "range": "stddev: 0.000014774903971731889",
            "extra": "mean: 96.6047823549529 usec\nrounds: 5486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 649440.5414268675,
            "unit": "iter/sec",
            "range": "stddev: 2.6311340086360354e-7",
            "extra": "mean: 1.539786841460387 usec\nrounds: 20534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4383.538804112018,
            "unit": "iter/sec",
            "range": "stddev: 0.00006331556997866801",
            "extra": "mean: 228.12618860860573 usec\nrounds: 1861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.183945453649047,
            "unit": "iter/sec",
            "range": "stddev: 0.0023084833740891603",
            "extra": "mean: 457.8868938000028 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.235326459390725,
            "unit": "iter/sec",
            "range": "stddev: 0.00021914815032079215",
            "extra": "mean: 75.55537092857126 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7199.465430081369,
            "unit": "iter/sec",
            "range": "stddev: 0.000016102127762993947",
            "extra": "mean: 138.89920157428938 usec\nrounds: 3304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 93.91543724976327,
            "unit": "iter/sec",
            "range": "stddev: 0.00009393830964871672",
            "extra": "mean: 10.647876741930633 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.71757848646684,
            "unit": "iter/sec",
            "range": "stddev: 0.001735585573567915",
            "extra": "mean: 30.564609187493375 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 264.96242068427006,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809740097004592",
            "extra": "mean: 3.774120108872355 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 266.562958188909,
            "unit": "iter/sec",
            "range": "stddev: 0.000281665325480661",
            "extra": "mean: 3.7514589678709807 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.07242698003387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005064572463864644",
            "extra": "mean: 12.488693520546729 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.26853643178175,
            "unit": "iter/sec",
            "range": "stddev: 0.0008125792639559603",
            "extra": "mean: 9.973218275509142 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.61020377559794,
            "unit": "iter/sec",
            "range": "stddev: 0.00009795939427102394",
            "extra": "mean: 6.0020333529323855 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.75040885242835,
            "unit": "iter/sec",
            "range": "stddev: 0.0008499216775434494",
            "extra": "mean: 12.69834677142967 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.08352928440792,
            "unit": "iter/sec",
            "range": "stddev: 0.0005142691685647818",
            "extra": "mean: 9.002234682692634 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6950216482430883,
            "unit": "iter/sec",
            "range": "stddev: 0.017098132423820054",
            "extra": "mean: 1.4388041041999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4666.431832078608,
            "unit": "iter/sec",
            "range": "stddev: 0.00015844850837428733",
            "extra": "mean: 214.29649804925182 usec\nrounds: 2050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6977843099618524,
            "unit": "iter/sec",
            "range": "stddev: 0.013775853223439537",
            "extra": "mean: 1.4331076032000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 240.68706040293375,
            "unit": "iter/sec",
            "range": "stddev: 0.0003827283000236434",
            "extra": "mean: 4.154772584475052 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.5350699188775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007898824345218171",
            "extra": "mean: 10.5780849462334 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.799614367496384,
            "unit": "iter/sec",
            "range": "stddev: 0.00039169864061058135",
            "extra": "mean: 208.35007219999397 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.20551057039808,
            "unit": "iter/sec",
            "range": "stddev: 0.00008518377751066741",
            "extra": "mean: 12.16463462195315 msec\nrounds: 82"
          }
        ]
      }
    ]
  }
}