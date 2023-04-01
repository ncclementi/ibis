window.BENCHMARK_DATA = {
  "lastUpdate": 1680351569255,
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
          "id": "a1164df5d1bc4fa454371626a0527d30ca8dd296",
          "message": "refactor: generate uuid-based names for temp tables",
          "timestamp": "2023-04-01T08:12:01-04:00",
          "tree_id": "04a4b9387db1e2607244b0703408b966778dd6c6",
          "url": "https://github.com/ibis-project/ibis/commit/a1164df5d1bc4fa454371626a0527d30ca8dd296"
        },
        "date": 1680351476103,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 207.7669914672966,
            "unit": "iter/sec",
            "range": "stddev: 0.006945120394503511",
            "extra": "mean: 4.813084084905778 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.68850512893805,
            "unit": "iter/sec",
            "range": "stddev: 0.0010575829014407066",
            "extra": "mean: 11.535554783331747 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 671309.9213897889,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024528645943767627",
            "extra": "mean: 1.4896249379567277 usec\nrounds: 24212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.56489940213926,
            "unit": "iter/sec",
            "range": "stddev: 0.003113907305046636",
            "extra": "mean: 30.70791000000165 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10082.784960485818,
            "unit": "iter/sec",
            "range": "stddev: 0.00004242514709879772",
            "extra": "mean: 99.17894747522385 usec\nrounds: 2951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.86136632731815,
            "unit": "iter/sec",
            "range": "stddev: 0.0010998128504536814",
            "extra": "mean: 10.431731137500222 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 973.3510636601321,
            "unit": "iter/sec",
            "range": "stddev: 0.00011938581617945277",
            "extra": "mean: 1.0273785454547704 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 417.6065292520586,
            "unit": "iter/sec",
            "range": "stddev: 0.00017767901185529797",
            "extra": "mean: 2.3945985753408103 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1416.8085090810005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000964739932071395",
            "extra": "mean: 705.8116842117504 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11384435418472462,
            "unit": "iter/sec",
            "range": "stddev: 0.16188748996500593",
            "extra": "mean: 8.783922638600007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.74697646087988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009360711036153491",
            "extra": "mean: 11.799831000007543 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1607463.4150115799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019177531297693903",
            "extra": "mean: 622.0981396287617 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3307.2371650709997,
            "unit": "iter/sec",
            "range": "stddev: 0.00038743069661008415",
            "extra": "mean: 302.3671875006073 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 590.0814012391955,
            "unit": "iter/sec",
            "range": "stddev: 0.00016190009317867564",
            "extra": "mean: 1.6946814420857164 msec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.617149934859384,
            "unit": "iter/sec",
            "range": "stddev: 0.0071352862699404",
            "extra": "mean: 79.25720191666603 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 248.38210868198206,
            "unit": "iter/sec",
            "range": "stddev: 0.00037493118472382847",
            "extra": "mean: 4.026054876924962 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.45856742587996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002904539642180734",
            "extra": "mean: 7.845686799998929 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.44100157453062,
            "unit": "iter/sec",
            "range": "stddev: 0.0009352876836685073",
            "extra": "mean: 17.40916719048647 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 95.51952066958494,
            "unit": "iter/sec",
            "range": "stddev: 0.0013890743605282094",
            "extra": "mean: 10.469064260269235 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6217945343764668,
            "unit": "iter/sec",
            "range": "stddev: 0.023536305333899055",
            "extra": "mean: 1.608248295400017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10414.900561312408,
            "unit": "iter/sec",
            "range": "stddev: 0.00008073793208352357",
            "extra": "mean: 96.01627918701774 usec\nrounds: 4968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1547078.476307687,
            "unit": "iter/sec",
            "range": "stddev: 0.000001074973620900933",
            "extra": "mean: 646.3796215345429 nsec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.029498006976036,
            "unit": "iter/sec",
            "range": "stddev: 0.004260993176834282",
            "extra": "mean: 124.54078687499504 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6288.720246057924,
            "unit": "iter/sec",
            "range": "stddev: 0.00010873174967926727",
            "extra": "mean: 159.01486484898874 usec\nrounds: 3485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.58471703674928,
            "unit": "iter/sec",
            "range": "stddev: 0.004296222482037958",
            "extra": "mean: 7.48588627638369 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4291616.362330273,
            "unit": "iter/sec",
            "range": "stddev: 0.000001055931510918221",
            "extra": "mean: 233.01243996948904 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 204.0132741175516,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582843970099528",
            "extra": "mean: 4.901641838382556 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6068827108607062,
            "unit": "iter/sec",
            "range": "stddev: 0.03380080313894512",
            "extra": "mean: 1.6477648516000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1617162.6022792875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026073222103848163",
            "extra": "mean: 618.3670081107266 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3593.8121715988846,
            "unit": "iter/sec",
            "range": "stddev: 0.00010147521504567422",
            "extra": "mean: 278.25605575683176 usec\nrounds: 1937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 217.42462173364683,
            "unit": "iter/sec",
            "range": "stddev: 0.0004795963753153067",
            "extra": "mean: 4.599295112147128 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.60063609477477,
            "unit": "iter/sec",
            "range": "stddev: 0.000865542350805418",
            "extra": "mean: 10.683688078652114 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5433028.2854887545,
            "unit": "iter/sec",
            "range": "stddev: 1.218331209625376e-7",
            "extra": "mean: 184.05941354489673 nsec\nrounds: 53474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 81.54707932282648,
            "unit": "iter/sec",
            "range": "stddev: 0.0016128415823155372",
            "extra": "mean: 12.262854884614883 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3508.0035959842594,
            "unit": "iter/sec",
            "range": "stddev: 0.00013391389601399078",
            "extra": "mean: 285.0624215849541 usec\nrounds: 2474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.280657431906191,
            "unit": "iter/sec",
            "range": "stddev: 0.019470620657454817",
            "extra": "mean: 780.8489414000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4169.058059643028,
            "unit": "iter/sec",
            "range": "stddev: 0.00005913302792524557",
            "extra": "mean: 239.8623347753579 usec\nrounds: 1156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.60938304337367,
            "unit": "iter/sec",
            "range": "stddev: 0.0004280032128732674",
            "extra": "mean: 7.484504285715993 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 63724.4102354716,
            "unit": "iter/sec",
            "range": "stddev: 0.000007925842692887919",
            "extra": "mean: 15.692573635516506 usec\nrounds: 12107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 135.83891988331737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004053412693874829",
            "extra": "mean: 7.361660419995815 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 97.32844155450762,
            "unit": "iter/sec",
            "range": "stddev: 0.0007152723803754219",
            "extra": "mean: 10.274488978023573 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 91.30615916824077,
            "unit": "iter/sec",
            "range": "stddev: 0.0009359415237301525",
            "extra": "mean: 10.952163677779936 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 247.60592637991417,
            "unit": "iter/sec",
            "range": "stddev: 0.0003616313495751955",
            "extra": "mean: 4.038675546342336 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 531.7445770307777,
            "unit": "iter/sec",
            "range": "stddev: 0.00023384337874527743",
            "extra": "mean: 1.8806021597510703 msec\nrounds: 482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 74.40047581508708,
            "unit": "iter/sec",
            "range": "stddev: 0.0005630918781533243",
            "extra": "mean: 13.440774256408963 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 81.74771404125278,
            "unit": "iter/sec",
            "range": "stddev: 0.0012929892614707325",
            "extra": "mean: 12.232757964282216 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 285.92257277294766,
            "unit": "iter/sec",
            "range": "stddev: 0.00036410472983390877",
            "extra": "mean: 3.497450342243892 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.329227085122,
            "unit": "iter/sec",
            "range": "stddev: 0.032050209722380124",
            "extra": "mean: 34.09568199999636 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.2998268289626,
            "unit": "iter/sec",
            "range": "stddev: 0.0009478648452516701",
            "extra": "mean: 12.936639589279407 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4082.612665002545,
            "unit": "iter/sec",
            "range": "stddev: 0.0001434268448226062",
            "extra": "mean: 244.9411889039385 usec\nrounds: 2938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4983837.923537871,
            "unit": "iter/sec",
            "range": "stddev: 6.334119071879572e-7",
            "extra": "mean: 200.64857953689298 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.330094059169085,
            "unit": "iter/sec",
            "range": "stddev: 0.0023329463926067837",
            "extra": "mean: 28.30448167857266 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.532087613784859,
            "unit": "iter/sec",
            "range": "stddev: 0.07696038973926762",
            "extra": "mean: 1.8793897360000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.70948297254264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007099182037816911",
            "extra": "mean: 17.633735093020963 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.590150489644866,
            "unit": "iter/sec",
            "range": "stddev: 0.036604827829675404",
            "extra": "mean: 1.694483047199992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 215.73057171590452,
            "unit": "iter/sec",
            "range": "stddev: 0.0007500221595885374",
            "extra": "mean: 4.635411625000927 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.73683107648367,
            "unit": "iter/sec",
            "range": "stddev: 0.0024406193498658175",
            "extra": "mean: 19.328590081632147 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.93602059761504,
            "unit": "iter/sec",
            "range": "stddev: 0.0012854171250220342",
            "extra": "mean: 10.760090582420123 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 413147.82486635045,
            "unit": "iter/sec",
            "range": "stddev: 4.828398472174029e-7",
            "extra": "mean: 2.420441158860006 usec\nrounds: 1691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.80936597561454,
            "unit": "iter/sec",
            "range": "stddev: 0.0011698090666006486",
            "extra": "mean: 12.688847164554318 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.17583024775663,
            "unit": "iter/sec",
            "range": "stddev: 0.004262628824354024",
            "extra": "mean: 239.4733360000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.03304672758765,
            "unit": "iter/sec",
            "range": "stddev: 0.000607747907066828",
            "extra": "mean: 11.359370567900857 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117141.46564152419,
            "unit": "iter/sec",
            "range": "stddev: 0.000045737382456638414",
            "extra": "mean: 8.536686770337976 usec\nrounds: 36494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9175275.829724941,
            "unit": "iter/sec",
            "range": "stddev: 2.654561192604051e-7",
            "extra": "mean: 108.98854907012729 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 92.34466462900579,
            "unit": "iter/sec",
            "range": "stddev: 0.0012817538350152256",
            "extra": "mean: 10.828995957887711 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3667.764951229565,
            "unit": "iter/sec",
            "range": "stddev: 0.00010439625788402034",
            "extra": "mean: 272.6456066015802 usec\nrounds: 2242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8870.477587037718,
            "unit": "iter/sec",
            "range": "stddev: 0.00003430774404340726",
            "extra": "mean: 112.7335016844283 usec\nrounds: 5342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3531.32376134345,
            "unit": "iter/sec",
            "range": "stddev: 0.00014197755356401535",
            "extra": "mean: 283.17992559808846 usec\nrounds: 1922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.44033558812536,
            "unit": "iter/sec",
            "range": "stddev: 0.0010152275263176226",
            "extra": "mean: 9.761779813184422 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.747763261450174,
            "unit": "iter/sec",
            "range": "stddev: 0.0033757150396117163",
            "extra": "mean: 50.63864634999504 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.60114270612483,
            "unit": "iter/sec",
            "range": "stddev: 0.0022889412250940645",
            "extra": "mean: 13.96625755128429 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 62.421159592769726,
            "unit": "iter/sec",
            "range": "stddev: 0.001972294876288147",
            "extra": "mean: 16.020208636364877 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.48589764728414,
            "unit": "iter/sec",
            "range": "stddev: 0.0012281425493129968",
            "extra": "mean: 25.98354361290486 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.94894810702192,
            "unit": "iter/sec",
            "range": "stddev: 0.0015971585400262522",
            "extra": "mean: 11.24240388764144 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.858607932990676,
            "unit": "iter/sec",
            "range": "stddev: 0.006700090019909674",
            "extra": "mean: 538.0370879999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 184.30726588188517,
            "unit": "iter/sec",
            "range": "stddev: 0.0045446612185653995",
            "extra": "mean: 5.425722069149776 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1575282.7733628112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016336661496333664",
            "extra": "mean: 634.8066625938308 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 215.13832983884495,
            "unit": "iter/sec",
            "range": "stddev: 0.0002725570396632984",
            "extra": "mean: 4.6481721818193735 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.35332600815056,
            "unit": "iter/sec",
            "range": "stddev: 0.00035450100995289773",
            "extra": "mean: 6.927446894736166 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 73.75362419373123,
            "unit": "iter/sec",
            "range": "stddev: 0.0016261895066298326",
            "extra": "mean: 13.558655739726973 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 90.69269035319935,
            "unit": "iter/sec",
            "range": "stddev: 0.0011051912271267783",
            "extra": "mean: 11.026246945652806 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 208.3658124832147,
            "unit": "iter/sec",
            "range": "stddev: 0.0007902378737742419",
            "extra": "mean: 4.799251797031515 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3783.4002041164213,
            "unit": "iter/sec",
            "range": "stddev: 0.00010186299765851677",
            "extra": "mean: 264.31250886754685 usec\nrounds: 3101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 238.72700638171517,
            "unit": "iter/sec",
            "range": "stddev: 0.00032693274853023903",
            "extra": "mean: 4.188885100000119 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.14264704659911,
            "unit": "iter/sec",
            "range": "stddev: 0.0018767852605444664",
            "extra": "mean: 30.172605060603143 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3741.1457437924987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008337349620923469",
            "extra": "mean: 267.29779283772933 usec\nrounds: 2206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 185.58608189582534,
            "unit": "iter/sec",
            "range": "stddev: 0.0008608057458582179",
            "extra": "mean: 5.388335104576043 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 87.83957242899676,
            "unit": "iter/sec",
            "range": "stddev: 0.0016409953979550178",
            "extra": "mean: 11.384390569618594 msec\nrounds: 79"
          }
        ]
      }
    ]
  }
}