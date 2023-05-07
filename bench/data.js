window.BENCHMARK_DATA = {
  "lastUpdate": 1683463949704,
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
          "id": "8c0a3092bf3297162bb3aa6a5d8a2b2d126963cd",
          "message": "test(postgres): move special types to their own view",
          "timestamp": "2023-05-07T05:46:20-07:00",
          "tree_id": "632b67d057a46bc83bcab9b19236ad60d3192797",
          "url": "https://github.com/ibis-project/ibis/commit/8c0a3092bf3297162bb3aa6a5d8a2b2d126963cd"
        },
        "date": 1683463853735,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1893.4302279296282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009493789313274802",
            "extra": "mean: 528.1419855082013 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1044.430651389569,
            "unit": "iter/sec",
            "range": "stddev: 0.00006086980450390563",
            "extra": "mean: 957.459452831592 usec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.34654146286441,
            "unit": "iter/sec",
            "range": "stddev: 0.0007038545166631347",
            "extra": "mean: 11.068492316455025 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1921.622198999573,
            "unit": "iter/sec",
            "range": "stddev: 0.00020958361647504506",
            "extra": "mean: 520.3936551735383 usec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.43541424503145,
            "unit": "iter/sec",
            "range": "stddev: 0.0008510425218919126",
            "extra": "mean: 11.985318333330497 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.07659395956276,
            "unit": "iter/sec",
            "range": "stddev: 0.009106774967338721",
            "extra": "mean: 12.183741451219051 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1997.383289183904,
            "unit": "iter/sec",
            "range": "stddev: 0.00011113636926467656",
            "extra": "mean: 500.65503472224526 usec\nrounds: 1440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 86.20593349092408,
            "unit": "iter/sec",
            "range": "stddev: 0.0008484380666206071",
            "extra": "mean: 11.600129590908981 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 170.74871451369592,
            "unit": "iter/sec",
            "range": "stddev: 0.0002804814846964568",
            "extra": "mean: 5.856559464286854 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2037895404084464,
            "unit": "iter/sec",
            "range": "stddev: 0.00562129599323968",
            "extra": "mean: 453.76383800000326 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 217.5581146673999,
            "unit": "iter/sec",
            "range": "stddev: 0.00025508788327836314",
            "extra": "mean: 4.5964730000018035 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4474386926775362,
            "unit": "iter/sec",
            "range": "stddev: 0.008996919370842673",
            "extra": "mean: 690.8755480000025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.00201538338558,
            "unit": "iter/sec",
            "range": "stddev: 0.0010244354716663147",
            "extra": "mean: 9.900792535715043 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 576.6415470498372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001241575995551691",
            "extra": "mean: 1.7341795871562014 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 209.4250889924246,
            "unit": "iter/sec",
            "range": "stddev: 0.004123023590538478",
            "extra": "mean: 4.774977080402111 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 645.7155107754767,
            "unit": "iter/sec",
            "range": "stddev: 0.00015945961290436282",
            "extra": "mean: 1.548669628206767 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 61.62828109494184,
            "unit": "iter/sec",
            "range": "stddev: 0.019285224048062693",
            "extra": "mean: 16.226316590908056 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8045483362459681,
            "unit": "iter/sec",
            "range": "stddev: 0.013589150716139026",
            "extra": "mean: 1.242933401199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 242.19472989128943,
            "unit": "iter/sec",
            "range": "stddev: 0.0003715594002929955",
            "extra": "mean: 4.128908999997052 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7445.384566128971,
            "unit": "iter/sec",
            "range": "stddev: 0.00002544558647151847",
            "extra": "mean: 134.31139669390151 usec\nrounds: 1573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1484376.2824035466,
            "unit": "iter/sec",
            "range": "stddev: 4.3724944966828177e-7",
            "extra": "mean: 673.6836285074362 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.30912709795518,
            "unit": "iter/sec",
            "range": "stddev: 0.0008669452604082281",
            "extra": "mean: 10.833164947371188 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 97.14287124970988,
            "unit": "iter/sec",
            "range": "stddev: 0.0003518288770357255",
            "extra": "mean: 10.294116152171963 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 94.26754769986007,
            "unit": "iter/sec",
            "range": "stddev: 0.00036895399687985307",
            "extra": "mean: 10.608104532260835 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.20025880769603,
            "unit": "iter/sec",
            "range": "stddev: 0.00043290823632236833",
            "extra": "mean: 4.460298151831006 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.38878137964678,
            "unit": "iter/sec",
            "range": "stddev: 0.023882744275252107",
            "extra": "mean: 29.95017963158076 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 247.32367055268196,
            "unit": "iter/sec",
            "range": "stddev: 0.00038796777856435125",
            "extra": "mean: 4.043284647059255 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5086778.409889361,
            "unit": "iter/sec",
            "range": "stddev: 4.052087951607616e-8",
            "extra": "mean: 196.58807980628876 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.22018926469326,
            "unit": "iter/sec",
            "range": "stddev: 0.0009003526645962008",
            "extra": "mean: 10.962485476743574 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.1539273163959,
            "unit": "iter/sec",
            "range": "stddev: 0.00039801788608647207",
            "extra": "mean: 10.509287721513633 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1946.641504725963,
            "unit": "iter/sec",
            "range": "stddev: 0.00015256170095008796",
            "extra": "mean: 513.7052701138077 usec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 70.91703407140089,
            "unit": "iter/sec",
            "range": "stddev: 0.019950313463440332",
            "extra": "mean: 14.100984525003923 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 179.37141642170107,
            "unit": "iter/sec",
            "range": "stddev: 0.00022663734395183318",
            "extra": "mean: 5.575024270583928 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.843057587361415,
            "unit": "iter/sec",
            "range": "stddev: 0.0013099420846205787",
            "extra": "mean: 59.37164287500707 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.05611761840497,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580417320880478",
            "extra": "mean: 11.22887485714213 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1944.9113811754157,
            "unit": "iter/sec",
            "range": "stddev: 0.00010339772706785617",
            "extra": "mean: 514.1622439350659 usec\nrounds: 1484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1984.1351062328804,
            "unit": "iter/sec",
            "range": "stddev: 0.00009932092492814196",
            "extra": "mean: 503.99793686359413 usec\nrounds: 1473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 76.03264946722454,
            "unit": "iter/sec",
            "range": "stddev: 0.01698535440506057",
            "extra": "mean: 13.152244555558607 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1648634.243211109,
            "unit": "iter/sec",
            "range": "stddev: 3.722544716922978e-7",
            "extra": "mean: 606.5626770266891 nsec\nrounds: 123442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3962.184705855332,
            "unit": "iter/sec",
            "range": "stddev: 0.00006111877327296937",
            "extra": "mean: 252.38601282827528 usec\nrounds: 1715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 75.38746596147466,
            "unit": "iter/sec",
            "range": "stddev: 0.016556419847651764",
            "extra": "mean: 13.264804530119518 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1964.2523312749613,
            "unit": "iter/sec",
            "range": "stddev: 0.00010080447771249683",
            "extra": "mean: 509.09956123148277 usec\nrounds: 1331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 276.7105163380663,
            "unit": "iter/sec",
            "range": "stddev: 0.00009754211969705306",
            "extra": "mean: 3.613885056606476 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.92468014095326,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352576829074256",
            "extra": "mean: 4.167974713616417 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5266361.543461424,
            "unit": "iter/sec",
            "range": "stddev: 4.274374425904738e-8",
            "extra": "mean: 189.8844186346897 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1637039.5222432183,
            "unit": "iter/sec",
            "range": "stddev: 3.0501663135348503e-7",
            "extra": "mean: 610.8588011544831 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1921.417497677478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001441325895956439",
            "extra": "mean: 520.4490961536233 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7841644524370586,
            "unit": "iter/sec",
            "range": "stddev: 0.010226491531727723",
            "extra": "mean: 1.275242708199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 231.3394368321227,
            "unit": "iter/sec",
            "range": "stddev: 0.0003057044049109443",
            "extra": "mean: 4.322652521738761 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.5768843505881,
            "unit": "iter/sec",
            "range": "stddev: 0.00013202723104630565",
            "extra": "mean: 7.164510116791316 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6803024453344559,
            "unit": "iter/sec",
            "range": "stddev: 0.005449198253238487",
            "extra": "mean: 1.4699344488000066 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10755.382727033733,
            "unit": "iter/sec",
            "range": "stddev: 0.000014440235681129393",
            "extra": "mean: 92.97670063255794 usec\nrounds: 4112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.03664496550985,
            "unit": "iter/sec",
            "range": "stddev: 0.020084754494813374",
            "extra": "mean: 13.506824903611616 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.36980336843725,
            "unit": "iter/sec",
            "range": "stddev: 0.0009838416828048353",
            "extra": "mean: 11.578120604653796 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.422798311207174,
            "unit": "iter/sec",
            "range": "stddev: 0.0012813441337675765",
            "extra": "mean: 31.8240275769247 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1642641.4822974857,
            "unit": "iter/sec",
            "range": "stddev: 3.4895797456358595e-7",
            "extra": "mean: 608.7755671440531 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.73717193090256,
            "unit": "iter/sec",
            "range": "stddev: 0.0010140460460830534",
            "extra": "mean: 37.4011134230771 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.54679735034784,
            "unit": "iter/sec",
            "range": "stddev: 0.0009907480057283397",
            "extra": "mean: 11.29346322988238 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146968.11773720128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014195899618513653",
            "extra": "mean: 6.804196824430549 usec\nrounds: 35712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.6431196554278,
            "unit": "iter/sec",
            "range": "stddev: 0.000353306873446367",
            "extra": "mean: 4.0380689816515245 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.04982227063226,
            "unit": "iter/sec",
            "range": "stddev: 0.00098997073186769",
            "extra": "mean: 19.588706787237456 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.44413832815636,
            "unit": "iter/sec",
            "range": "stddev: 0.00041216194590222425",
            "extra": "mean: 11.056548478263162 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14849131464731882,
            "unit": "iter/sec",
            "range": "stddev: 0.16834173444752776",
            "extra": "mean: 6.734400610399985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.304045572613553,
            "unit": "iter/sec",
            "range": "stddev: 0.0010882798742744865",
            "extra": "mean: 136.91042725000102 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1940.4154315549247,
            "unit": "iter/sec",
            "range": "stddev: 0.00009671732825759518",
            "extra": "mean: 515.3535597264674 usec\nrounds: 1172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1498.086802102566,
            "unit": "iter/sec",
            "range": "stddev: 0.000038471595866092746",
            "extra": "mean: 667.5180627694599 usec\nrounds: 1163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 97.40009982293401,
            "unit": "iter/sec",
            "range": "stddev: 0.00024404347421290562",
            "extra": "mean: 10.266929929414077 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.21469126645939,
            "unit": "iter/sec",
            "range": "stddev: 0.0003592128042843281",
            "extra": "mean: 22.116705256413145 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 233.95473068868154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003180713982545317",
            "extra": "mean: 4.274331179610461 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 851821.5660191054,
            "unit": "iter/sec",
            "range": "stddev: 3.0247153863987775e-7",
            "extra": "mean: 1.1739547810152193 usec\nrounds: 69440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9645652.593074381,
            "unit": "iter/sec",
            "range": "stddev: 1.1148407157638389e-8",
            "extra": "mean: 103.67364886418741 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6002349.398007653,
            "unit": "iter/sec",
            "range": "stddev: 1.5772677994708114e-8",
            "extra": "mean: 166.60143115494122 nsec\nrounds: 59169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4536536.09981856,
            "unit": "iter/sec",
            "range": "stddev: 3.7665172766192846e-8",
            "extra": "mean: 220.43250136186222 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.48701221359437,
            "unit": "iter/sec",
            "range": "stddev: 0.004149038688777639",
            "extra": "mean: 6.969271884422562 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12154.25211757829,
            "unit": "iter/sec",
            "range": "stddev: 0.000006025175195347887",
            "extra": "mean: 82.27573283211177 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 363.1943315219941,
            "unit": "iter/sec",
            "range": "stddev: 0.00006470281805502137",
            "extra": "mean: 2.75334693636165 msec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.8343906875708,
            "unit": "iter/sec",
            "range": "stddev: 0.001123355422864487",
            "extra": "mean: 12.370972200001518 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 459.41635763700816,
            "unit": "iter/sec",
            "range": "stddev: 0.00017847778120701072",
            "extra": "mean: 2.176674781767599 msec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.93857932872987,
            "unit": "iter/sec",
            "range": "stddev: 0.0009554280807279154",
            "extra": "mean: 11.502373373491947 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.46038890950823,
            "unit": "iter/sec",
            "range": "stddev: 0.0010872983457613395",
            "extra": "mean: 11.304494727272381 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 240.2710948805182,
            "unit": "iter/sec",
            "range": "stddev: 0.00037751506707781155",
            "extra": "mean: 4.161965468619016 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3773516.2177807637,
            "unit": "iter/sec",
            "range": "stddev: 4.929107706158554e-8",
            "extra": "mean: 265.0048236940153 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.08499338082409,
            "unit": "iter/sec",
            "range": "stddev: 0.0008577977458063797",
            "extra": "mean: 24.339787297294237 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.03445695270135,
            "unit": "iter/sec",
            "range": "stddev: 0.0012409892197493598",
            "extra": "mean: 18.17043458536235 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.62343841756166,
            "unit": "iter/sec",
            "range": "stddev: 0.00019724731649121724",
            "extra": "mean: 6.683444857143637 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.658854349989703,
            "unit": "iter/sec",
            "range": "stddev: 0.0011047816951127562",
            "extra": "mean: 46.17049377777801 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.94853852854426,
            "unit": "iter/sec",
            "range": "stddev: 0.0007924904278646164",
            "extra": "mean: 11.501055876536796 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.41402341099632,
            "unit": "iter/sec",
            "range": "stddev: 0.0016645244888967418",
            "extra": "mean: 28.237401562497766 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1614156957415602,
            "unit": "iter/sec",
            "range": "stddev: 0.0068535965140383995",
            "extra": "mean: 861.0181553999951 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.69871881324812,
            "unit": "iter/sec",
            "range": "stddev: 0.00016878558134105656",
            "extra": "mean: 7.107385258619999 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9269.986867183577,
            "unit": "iter/sec",
            "range": "stddev: 0.00000781603186774497",
            "extra": "mean: 107.8750179830429 usec\nrounds: 4560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.4759004339484,
            "unit": "iter/sec",
            "range": "stddev: 0.0009578714959615428",
            "extra": "mean: 11.563915437501748 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}